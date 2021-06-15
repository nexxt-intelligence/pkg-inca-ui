import React from "react";
import { UilTimes } from "@iconscout/react-unicons";
import "../../styles/tailwind.css";
import "./SplitPaneModal.css";

export function SplitPaneModal({
  isOpen,
  isClosable = true,
  icon,
  header,
  body,
  isBlurred = true,
  darkLevel = "70",
  onClose,
  children,
}) {
  return (
    isOpen && (
      <div
        className={`flex justify-center items-center fixed left-0 top-0 bg-black bg-opacity-${darkLevel} h-screen w-screen z-100 ${
          isBlurred && "blurEffect"
        }`}
      >
        <div className="bg-white grid grid-cols-2">
          <div className="p-5 bg-blue text-white flex items-center">
            <div className="mx-10 w-80 pr-16">
              {icon}
              <h2 className="text-5xl my-3 font-bold">{header}</h2>
              <p className="font-bold text-sm">{body}</p>
            </div>
          </div>
          <div className="p-5 flex flex-col">
            <div className="flex justify-end min-h-6">
              <span>&nbsp;</span>
              {isClosable && (
                <button className="unstyled" onClick={onClose}>
                  <UilTimes className="text-default" />
                </button>
              )}
            </div>
            <div className="h-full">{children}</div>
          </div>
        </div>
      </div>
    )
  );
}

export function SplitPaneModalContent({ header, body, children }) {
  return (
    <div className="flex flex-col flex-grow justify-center w-80 h-96 mx-10">
      <div>
        <div className="mb-4">
          <h2 className="font-bold text-3xl">{header}</h2>
          <p className="mt-1 text-xs">{body}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function SplitPaneModalActions({ children }) {
  return <div className="flex justify-end">{children}</div>;
}

export default SplitPaneModal;
