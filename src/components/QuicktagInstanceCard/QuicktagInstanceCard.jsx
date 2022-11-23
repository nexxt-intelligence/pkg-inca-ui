import React from "react";
import _ from "lodash";
import {
  UilClock,
  UilHeart,
  UilImport,
  UilTrashAlt,
  UilFile,
} from "@iconscout/react-unicons";

export const QuicktagInstanceCard = ({
  object,
  favourites,
  deleteQuickTagInstance,
  favouriteQuickTagInstance,
  redirectUrl,
}) => {
  const {
    QuestionLabel,
    StudyName,
    Status,
    LastUpdatedTime,
    CsvUrl,
    QuickTagInstanceID,
  } = object;
  const date = new Date(LastUpdatedTime);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  // TODO: Fix function or update to display number of verbatims instead of filesize
  // const [fileSize, setFileSize] = useState('0');

  // useEffect(() => {
  //     (async () => {
  //         if (_.isNil(CsvUrl)) {
  //             const verbatimBytes = _.isNil(VerbatimsSize)
  //                 ? 0
  //                 : Number(VerbatimsSize);
  //             const keywordsBytes = _.isNil(KeywordsSize)
  //                 ? 0
  //                 : Number(KeywordsSize);
  //             const clustersBytes = _.isNil(ClustersSize)
  //                 ? 0
  //                 : Number(ClustersSize);
  //             const sizeInMb = (
  //                 (verbatimBytes + keywordsBytes + clustersBytes) /
  //                 (1024 * 1024)
  //             ).toFixed(2);
  //             setFileSize(sizeInMb);
  //         } else {
  //             const csvHead = await axios.head(CsvUrl);
  //             const sizeInMb = (
  //                 Number(csvHead?.headers?.['content-length']) /
  //                 (1024 * 1024)
  //             ).toFixed(2);
  //             setFileSize(sizeInMb);
  //         }
  //     })();
  // }, [props]);

  const handleDelete = (e) => {
    e.stopPropagation();
    if (_.isFunction(deleteQuickTagInstance))
      deleteQuickTagInstance(QuickTagInstanceID);
  };

  const handleFavourite = (e) => {
    e.stopPropagation();
    if (_.isFunction(favouriteQuickTagInstance))
      favouriteQuickTagInstance(QuickTagInstanceID);
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.location.href = CsvUrl;
  };

  return (
    <div
      className="inca-ui-cursor-pointer inca-ui-border inca-ui-rounded-md inca-ui-flex inca-ui-flex-col"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = redirectUrl;
      }}
    >
      <div className="inca-ui-flex-grow inca-ui-flex inca-ui-flex-col inca-ui-justify-between inca-ui-py-3 inca-ui-px-3 inca-ui-bg-slate-50">
        <div>
          <h6 className="inca-ui-font-medium inca-ui-mb-0">{QuestionLabel}</h6>
          <p className="inca-ui-mb-2 inca-ui-text-sm inca-ui-font-light">
            {StudyName}
          </p>
        </div>
        <div className="inca-ui-flex inca-ui-justify-between inca-ui-items-center inca-ui-text-sm">
          <span
            className={`inca-ui-font-medium
              ${
                Status === 0
                  ? "inca-ui-text-amber-500"
                  : "inca-ui-text-green-600"
              }`}
          >
            {Status === 0 ? "Analyzing" : "Ready"}
          </span>
          <div className="inca-ui-flex">
            {/* {fileSize && (
                  <div className="inca-ui-flex inca-ui-items-center">
                      <UilFile
                          className="inca-ui-mr-1 inca-ui-text-slate-600"
                          size={14}
                      />
                      <span className="inca-ui-mr-3 inca-ui-text-slate-600">
                          {`${fileSize} MB`}
                      </span>
                  </div>
              )} */}
            <div className="inca-ui-flex inca-ui-items-center">
              <UilClock className="inca-ui-mr-1 inca-ui-slate-400" size={14} />
              <span className="inca-ui-text-slate-600">
                {date.toLocaleDateString("UTC", options)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="inca-ui-py-2 inca-ui-px-3 inca-ui-flex inca-ui-justify-end inca-ui-items-center inca-ui-bg-slate-100 inca-ui-border-t">
        <div className="inca-ui-flex">
          {!_.isNil(CsvUrl) && (
            <button
              className="inca-ui-flex inca-ui-justify-center inca-ui-items-center focus:inca-ui-outline-none inca-ui-border inca-ui-rounded inca-ui-w-12 inca-ui-h-8 inca-ui-bg-white inca-ui-mr-3"
              type="button"
              onClick={handleDownload}
            >
              <UilImport className="inca-ui-text-slate-600" size={14} />
            </button>
          )}
          <button
            className={`inca-ui-flex inca-ui-justify-center inca-ui-items-center focus:inca-ui-outline-none inca-ui-border inca-ui-rounded inca-ui-w-12 inca-ui-h-8 inca-ui-bg-white inca-ui-mr-3 ${
              favourites.includes(QuickTagInstanceID)
                ? "inca-ui-bg-red-400 "
                : ""
            }`}
            type="button"
            onClick={handleFavourite}
          >
            <UilHeart
              size={14}
              className={`${
                favourites.includes(QuickTagInstanceID)
                  ? "inca-ui-text-white"
                  : "inca-ui-text-slate-600"
              }`}
            />
          </button>
          <button
            className="inca-ui-flex inca-ui-justify-center inca-ui-items-center focus:inca-ui-outline-none inca-ui-border inca-ui-rounded inca-ui-w-12 inca-ui-h-8 inca-ui-bg-white"
            type="button"
            onClick={handleDelete}
          >
            <UilTrashAlt size={14} className="inca-ui-text-slate-600" />
          </button>
        </div>
      </div>
    </div>
  );
};
