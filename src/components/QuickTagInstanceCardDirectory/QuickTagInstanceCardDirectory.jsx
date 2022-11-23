import React, { useState, useEffect } from "react";
import _ from "lodash";
import { QuicktagInstanceCard } from "../QuicktagInstanceCard";
import { Pagination } from "../Pagination";
import { UilSearch, UilImport } from "@iconscout/react-unicons";
import Select from "react-select";
import {
  PAGE_SIZE_OPTIONS,
  QUICKTAG_SORT_OPTIONS,
  QUICKTAG_DROPDOWN_OPTIONS,
} from "../../utils/constants";

export const QuickTagInstanceCardDirectory = ({
  showForm,
  setShowForm,
  Component,
  quickTagHostUrl,
  loadQuickTagInstanceCards,
  loadQuickTagFavouritesSession,
  saveQuickTagFavouritesSesssion,
  deleteQuickTag,
}) => {
  let timeoutRef = null;

  const [quickTagInstanceCards, setQuickTagInstanceCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [fullQuickTagInstanceCards, setFullQuickTagInstanceCards] = useState(
    []
  );
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState(
    QUICKTAG_SORT_OPTIONS.LAST_UPDATE_DESC
  );
  const [favourites, setFavourites] = useState([]);

  const setActiveQuicktagInstanceCard = (
    page,
    pageSize,
    searchQuery,
    sortOption,
    favourites
  ) => {
    const lastIndex = (page + 1) * pageSize;
    const firstIndex = lastIndex - pageSize;
    const filteredQuickTagInstanceCards = _.cloneDeep(
      fullQuickTagInstanceCards
    ).filter((o) => o.QuestionLabel.toLowerCase().includes(searchQuery));
    const sortedQuickTagInstanceCards = filteredQuickTagInstanceCards.sort(
      (a, b) => {
        let dateComparator;
        switch (sortOption) {
          case QUICKTAG_SORT_OPTIONS.LAST_UPDATE_DESC:
            dateComparator =
              Number(new Date(b.LastUpdatedTime)) -
              Number(new Date(a.LastUpdatedTime));
            break;
          case QUICKTAG_SORT_OPTIONS.LAST_UPDATE_ASC:
            dateComparator =
              Number(new Date(a.LastUpdatedTime)) -
              Number(new Date(b.LastUpdatedTime));
        }
        return dateComparator;
      }
    );

    const favouriteQuickTagInstanceCards = sortedQuickTagInstanceCards.sort(
      (a, b) => {
        const isALiked = favourites.includes(a.QuickTagInstanceID);
        const isBLiked = favourites.includes(b.QuickTagInstanceID);

        if (isALiked && !isBLiked) {
          return -1;
        } else if (!isALiked && isBLiked) {
          return 1;
        } else {
          return 0;
        }
      }
    );

    const slicedQuickTagInstanceCards = favouriteQuickTagInstanceCards.slice(
      firstIndex,
      lastIndex
    );
    setTotalPages(Math.ceil(filteredQuickTagInstanceCards.length / pageSize));
    setQuickTagInstanceCards(slicedQuickTagInstanceCards);
  };

  const deleteInstance = async (quickTagId) => {
    setLoaded(false);
    try {
      await deleteQuickTag(quickTagId);
      loadInstances();
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const deleteQuickTagInstance = async (quickTagId) => {
    if (_.isNil(quickTagId)) return;
    await deleteInstance(quickTagId);
  };

  const favouriteQuickTagInstance = (quickTagId) => {
    let quickTagClone = [...favourites];
    if (quickTagClone.includes(quickTagId)) {
      quickTagClone = quickTagClone.filter((o) => o !== quickTagId);
    } else {
      quickTagClone = [...quickTagClone, quickTagId];
    }

    saveQuickTagFavouritesSesssion(quickTagClone);
    setFavourites(quickTagClone);
  };

  const loadInstances = async (loadingIndicator = false, polling = false) => {
    if (loadingIndicator) setLoaded(false);
    console.log("loadInstance runs", loaded);

    try {
      const retrievedQuickTagInstanceCards = await loadQuickTagInstanceCards();
      setFullQuickTagInstanceCards(retrievedQuickTagInstanceCards);

      const localFavourites = await loadQuickTagFavouritesSession();
      const stateFavourites =
        _.isNil(localFavourites) || !_.isArray(localFavourites)
          ? []
          : localFavourites;
      setFavourites(stateFavourites);
      setActiveQuicktagInstanceCard(
        page,
        pageSize,
        searchQuery,
        sortOption,
        stateFavourites
      );

      if (polling)
        timeoutRef = setTimeout(() => {
          loadInstances();
        }, 10000);
    } catch (err) {
      // if (!axios.isCancel(err)) {
      //   throw new Error(err);
      // }
    } finally {
      setLoaded(true);
      console.log("loaded", true);
    }
  };

  useEffect(() => {
    loadInstances();

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [loaded]);

  useEffect(() => {
    setPage(0);
  }, [searchQuery]);

  useEffect(() => {
    setActiveQuicktagInstanceCard(
      page,
      pageSize,
      searchQuery,
      sortOption,
      favourites
    );
  }, [page, pageSize, sortOption, searchQuery, favourites]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOnPageChange = (newPage) => {
    setPage(newPage);
  };

  const handleOnPageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(0);
  };

  const handleSortOption = (newValue) => {
    if (_.isFunction(setSortOption)) return setSortOption(newValue.value);
  };
  const findSortOption = (sortOption) => {
    return QUICKTAG_DROPDOWN_OPTIONS[
      QUICKTAG_DROPDOWN_OPTIONS.findIndex((o) => o.value === sortOption)
    ];
  };

  return (
    <>
      {showForm && Component && (
        <>
          {React.cloneElement(Component, {
            loadInstances: loadInstances,
            quickTagInstanceCards: quickTagInstanceCards,
          })}
        </>
      )}
      <div className="inca-ui-w-full inca-ui-h-full inca-ui-flex inca-ui-flex-col">
        <div className="inca-ui-mb-3 inca-ui-flex inca-ui-justify-between inca-ui-items-center">
          <div className="inca-ui-flex inca-ui-space-between inca-ui-items-center">
            <div className="inca-ui-border inca-ui-rounded inca-ui-py-2 inca-ui-px-3 inca-ui-mr-2 inca-ui-flex inca-ui-space-between inca-ui-items-center">
              <UilSearch className="inca-ui-text-slate-400" size={16} />
              <input
                onChange={handleSearchQueryChange}
                type={"text"}
                placeholder={"Search Your Datasets..."}
                className={
                  "inca-ui-ml-3 focus:inca-ui-outline-none inca-ui-w-72 inca-ui-text-sm"
                }
              />
            </div>
            <div className="inca-ui-border inca-ui-rounded inca-ui-w-52">
              <Select
                id="lang"
                onChange={handleSortOption}
                value={findSortOption(sortOption)}
                options={QUICKTAG_DROPDOWN_OPTIONS}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    boxShadow: "none",
                    border: "none",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "#b2b7c1",
                  }),
                }}
              />
            </div>
          </div>
          <div>
            {setShowForm && (
              <button
                className="inca-ui-inca-button"
                onClick={() => {
                  setShowForm(true);
                }}
                type="button"
              >
                <UilImport size={16} className="inca-ui-mr-2" />
                Upload Your Own Data
              </button>
            )}
          </div>
        </div>
        <div className="inca-ui-w-full inca-ui-flex-grow">
          {loaded ? (
            quickTagInstanceCards.length > 0 ? (
              <div className="inca-ui-h-full inca-ui-grid inca-ui-grid-cols-3 inca-ui-grid-rows-4 inca-ui-gap-3">
                {quickTagInstanceCards.map((o, i) => {
                  const redirectUrl = `${quickTagHostUrl}/?id=${o.QuickTagInstanceID}`;
                  return (
                    <QuicktagInstanceCard
                      favourites={favourites}
                      object={o}
                      key={i}
                      deleteQuickTagInstance={deleteQuickTagInstance}
                      favouriteQuickTagInstance={favouriteQuickTagInstance}
                      redirectUrl={redirectUrl}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="inca-ui-h-full inca-ui-w-full inca-ui-flex inca-ui-items-center inca-ui-justify-center">
                <div className="inca-ui-text-center inca-ui-text-gray-400 inca-ui-font-bold ">
                  <p>You do not yet have any Quicktag Instances.</p>
                  <button
                    className="inca-ui-inca-button inca-ui-mx-auto"
                    onClick={() => {
                      setShowForm(true);
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="inca-ui-h-full inca-ui-w-full inca-ui-flex inca-ui-items-center inca-ui-justify-center">
              <div className="inca-ui-text-center inca-ui-text-gray-400 inca-ui-font-bold">
                Loading...
              </div>
            </div>
          )}
        </div>
        <div className="inca-ui-flex inca-ui-justify-end">
          {loaded && (
            <div className="">
              <Pagination
                pageSize={pageSize}
                pageSizeOptions={12}
                page={page}
                pages={totalPages}
                canPrevious={page > 0}
                canNext={page < totalPages - 1}
                onPageChange={handleOnPageChange}
                onPageSizeChange={handleOnPageSizeChange}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
