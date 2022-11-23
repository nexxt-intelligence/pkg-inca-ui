import * as React from "react";
import "./Pagination.css";
import { UilAngleLeft, UilAngleRight } from "@iconscout/react-unicons";

export const Pagination = ({
  pages,
  pageSize,
  pageSizeOptions,
  page,
  canPrevious,
  canNext,
  onPageChange,
  onPageSizeChange,
}) => {
  const getPagination = (current, last) => {
    const delta = 1;
    const left = current - delta;
    const right = current + delta + 1;
    const range = Array.from({ length: last }, (v, index) => {
      const i = index + 1;
      if (i == 1 || i == last || (i >= left && i < right)) {
        return i;
      }
    });
    const rangeWithDots = [];
    let l;

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const totalPages = pages;
  const paginatedPages = getPagination(page + 1, totalPages);

  return (
    <div className="inca-ui-ReactTable">
      <div className="inca-ui-pagination-bottom">
        <div className="inca-ui-rt-pagination">
          {pageSizeOptions.length > 1 && (
            <div className="inca-ui-rt-pagination__page-size">
              <label htmlFor="page-size--select">
                <span>Per page: </span>
                <select
                  id="page-size--select"
                  name="page-size--select"
                  value={pageSize}
                  onChange={(e) => onPageSizeChange(e.target.value)}
                >
                  {pageSizeOptions.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
          )}
          {canPrevious ? (
            <div
              className="inca-ui-rt-pagination__prev-button"
              onClick={() => {
                onPageChange(+page - 1);
              }}
            >
              <UilAngleLeft size={16} />
            </div>
          ) : (
            <div className="inca-ui-rt-pagination__prev-button disabled">
              <UilAngleLeft size={16} />
            </div>
          )}
          <div className="inca-ui-rt-pagination__pages">
            {paginatedPages.map((value, index) => {
              const isActive = page + 1 === +value;
              if (value === "...") {
                return (
                  <span className="inca-ui-rt-pagination__page-no" key={index}>
                    {" "}
                    {value}{" "}
                  </span>
                );
              } else {
                return (
                  <span
                    key={index}
                    className={`inca-ui-rt-pagination__page-no ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() => {
                      onPageChange(+value - 1);
                    }}
                  >
                    {value}
                  </span>
                );
              }
            })}
          </div>
          {canNext ? (
            <div
              className="inca-ui-rt-pagination__next-button"
              onClick={() => {
                onPageChange(+page + 1);
              }}
            >
              <UilAngleRight size={16} />
            </div>
          ) : (
            <div className="inca-ui-rt-pagination__next-button disabled">
              <UilAngleRight size={16} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
