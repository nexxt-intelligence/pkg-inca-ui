import * as React from "react";
import classnames from "classnames";
import ReactLoading from "react-loading";
import "./Loader.css";

export const Loader = ({
  isFixed = false,
  isInline = true,
  colorclassname = "teal",
  transparent = false,
  type = "cubes",
  color = "#2D67CB",
  text,
  height = 64,
  width = 64,
  bgColor = "rgba(0, 0, 0, 0.5)",
  textColor = "white",
  packages,
}) => {
  switch (packages) {
    case "dashboard":
      return (
        <div
          className="inca-ui-fixed inca-ui-w-full inca-ui-h-full inca-ui-top-0 inca-ui-left-0 inca-ui-right-0 inca-ui-bottom-0 inca-ui-z-999"
          style={{ backgroundColor: bgColor }}
        >
          <div className="inca-ui-flex inca-ui-justify-center inca-ui-items-center inca-ui-h-screen">
            <div>
              <ReactLoading
                className="loading-bar"
                type={type}
                color={color}
                height={height}
                width={width}
              />
              <p className="inca-ui-text-base" style={{ color: textColor }}>
                {text}
              </p>
            </div>
          </div>
        </div>
      );
      break;

    // case "portal":
    default:
      if (!isFixed) {
        if (isInline) {
          return (
            <div className="inca-ui-flex inca-ui-w-full">
              <Spinner className={colorclassname} />
            </div>
          );
        } else {
          return (
            <div
              className="inca-ui-absolute inca-ui-z-1041 inca-ui-top-0 inca-ui-left-0 inca-ui-w-screen inca-ui-h-screen inca-ui-flex inca-ui-items-center inca-ui-justify-center"
              style={{
                minHeight: "100%",
                minWidth: "100%",
                background: "rgb(245 245 245)",
              }}
            >
              <Spinner className={colorclassname} />
            </div>
          );
        }
      }
      return (
        <>
          <div className="inca-ui-absolute inca-ui-z-1041 inca-ui-top-0 inca-ui-left-0 inca-ui-w-screen inca-ui-h-screen inca-ui-flex inca-ui-items-center inca-ui-justify-center">
            <Spinner className={colorclassname} />
          </div>
          {!transparent && <Backdrop isOpen={true} />}
        </>
      );
  }
};

const Spinner = ({ size, className }) => {
  return (
    <div
      className={classnames("spinner", {
        [size]: true,
        className,
      })}
    >
      <div
        className={classnames("spinningCircle", {
          [size]: true,
          className,
        })}
      />
    </div>
  );
};

const Backdrop = ({ isOpen, isAbsolute }) => {
  return (
    <div
      className={classnames("modal-backdrop fade", {
        show: isOpen,
      })}
    ></div>
  );
};
