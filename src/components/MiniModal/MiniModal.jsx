import React, { useRef } from "react";
import { UilTimes } from "@iconscout/react-unicons";
import handleOutsideClick from "../../utils/HandleOutsideClick";

export function MiniModal({ isOpen, isClosable = true, onClose, children }) {
  const ref = useRef();

  handleOutsideClick(ref, onClose, "mousedown");

  return (
    isOpen && (
      <div
        className={`flex justify-center items-center fixed left-0 top-0 bg-black/25 h-screen w-screen z-100`}
        ref={ref}
      >
        <div ref={ref} className="bg-white p-5 flex flex-col">
          <div className="flex justify-end min-h-6">
            {isClosable ? (
              <button className="unstyled" onClick={onClose}>
                <UilTimes className="text-default" />
              </button>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
          <div className="h-full">{children}</div>
        </div>
      </div>
    )
  );
}

export function MiniModalContent({ header, body, children }) {
  return (
    <div className="flex flex-col flex-grow w-80 min-h-48 mx-10">
      <div>
        <div className="mb-4">
          <h2 className="font-bold text-3xl">{header}</h2>
          <p className="mt-1 text-md">{body}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
export function MiniModalActions({ children }) {
  return <div className="flex justify-end">{children}</div>;
}
export default MiniModal;
