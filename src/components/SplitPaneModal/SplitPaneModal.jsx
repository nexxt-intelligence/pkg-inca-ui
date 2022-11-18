import React from "react";
import { UilTimes } from "@iconscout/react-unicons";
import "../../styles/tailwind.css";

export function SplitPaneModal({
  isOpen,
  isClosable = true,
  icon,
  header,
  body,
  isBlurred = true,
  onClose,
  children,
}) {
  return (
    isOpen && (
      <div
        className={`inca-ui-flex inca-ui-justify-center inca-ui-items-center inca-ui-fixed inca-ui-left-0 inca-ui-top-0 inca-ui-bg-black/70 inca-ui-h-screen inca-ui-w-screen inca-ui-z-100 ${isBlurred &&
          "inca-ui-blurEffect"}`}
      >
        <div className="inca-ui-bg-white inca-ui-grid inca-ui-grid-cols-2">
          <div className="inca-ui-p-5 inca-ui-bg-blue inca-ui-text-white inca-ui-flex inca-ui-items-center">
            <div className="inca-ui-mx-10 inca-ui-w-80 inca-ui-pr-16">
              {icon}
              <h2 className="inca-ui-text-5xl inca-ui-my-3 inca-ui-font-bold">
                {header}
              </h2>
              <p className="inca-ui-font-bold inca-ui-text-sm">{body}</p>
            </div>
          </div>
          <div className="inca-ui-p-5 inca-ui-flex inca-ui-flex-col">
            <div className="inca-ui-flex inca-ui-justify-end inca-ui-min-h-6">
              <span>&nbsp;</span>
              {isClosable && (
                <button className="inca-ui-unstyled" onClick={onClose}>
                  <UilTimes className="inca-ui-text-default" />
                </button>
              )}
            </div>
            <div className="inca-ui-h-full">{children}</div>
          </div>
        </div>
      </div>
    )
  );
}

export function SplitPaneModalContent({ header, body, children }) {
  return (
    <div className="inca-ui-flex inca-ui-flex-col inca-ui-flex-grow inca-ui-justify-center inca-ui-w-80 inca-ui-h-96 inca-ui-mx-10">
      <div>
        <div className="inca-ui-mb-4">
          <h2 className="inca-ui-font-bold inca-ui-text-3xl">{header}</h2>
          <p className="inca-ui-mt-1 inca-ui-text-xs">{body}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function SplitPaneModalActions({ children }) {
  return <div className="inca-ui-flex inca-ui-justify-end">{children}</div>;
}

export default SplitPaneModal;
