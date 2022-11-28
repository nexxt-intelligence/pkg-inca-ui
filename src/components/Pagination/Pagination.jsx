import * as React from "react";
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
    const delta = 2;
    const left = current - delta;
    const right = current + delta + 1;
    const range = Array.from({ length: last }, (v, index) => {
      const i = index + 1;
      if (i == 1 || i == last || (i >= left && i < right)) {
        return i;
      }
    }).filter((v) => v !== undefined);
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
    <div className="inca-ui-w-max inca-ui-h-8 inca-ui-flex inca-ui-items-center inca-ui-space-x-2">
      {pageSizeOptions.length > 1 && (
        <div className="inca-ui-bg-white inca-ui-flex inca-ui-items-center inca-ui-justify-center inca-ui-rounded-full inca-ui-shadow inca-ui-px-4 inca-ui-py-1">
          <label
            className="inca-ui-flex inca-ui-m-0"
            htmlFor="page-size--select"
          >
            <span>Per page: </span>
            <select
              className="inca-ui-bg-white inca-ui-outline-none inca-ui-border-none inca-ui-cursor-pointer"
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

      <div
        className={`inca-ui-bg-white inca-ui-h-full inca-ui-rounded-full inca-ui-aspect-square inca-ui-flex inca-ui-items-center inca-ui-justify-center inca-ui-shadow ${
          canPrevious
            ? "inca-ui-cursor-pointer"
            : "inca-ui-pointer-events-none inca-ui-text-gray-400 "
        }`}
        onClick={() => {
          onPageChange(+page - 1);
        }}
      >
        <UilAngleLeft size={20} />
      </div>

      <div className="inca-ui-bg-white inca-ui-h-full inca-ui-flex inca-ui-items-center inca-ui-rounded-full inca-ui-shadow">
        {paginatedPages.map((value, index) => {
          const isActive = page + 1 === +value;
          const isTrunc = value === "...";

          return (
            <span
              key={index}
              className={`inca-ui-h-full inca-ui-aspect-square inca-ui-rounded-full inca-ui-flex inca-ui-justify-center inca-ui-items-center ${
                isActive
                  ? "inca-ui-bg-blue inca-ui-text-white inca-ui-cursor-default"
                  : isTrunc
                  ? "inca-ui-cursor-default"
                  : "inca-ui-cursor-pointer"
              }`}
              onClick={() => {
                if (!isTrunc) {
                  onPageChange(+value - 1);
                }
              }}
            >
              {value}
            </span>
          );
        })}
      </div>
      <div
        className={`inca-ui-bg-white inca-ui-h-full inca-ui-rounded-full inca-ui-aspect-square inca-ui-flex inca-ui-items-center inca-ui-justify-center inca-ui-shadow ${
          canNext
            ? "inca-ui-cursor-pointer"
            : "inca-ui-pointer-events-none inca-ui-text-gray-400 "
        }`}
        onClick={() => {
          onPageChange(+page + 1);
        }}
      >
        <UilAngleRight size={20} />
      </div>
    </div>
  );
};
