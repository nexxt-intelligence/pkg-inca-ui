import React from "react";
import {
  UilAngleLeftB,
  UilAngleRightB,
  UilCommentAltLines,
  UilQuestionCircle,
  UilBars,
} from "@iconscout/react-unicons";
import "./sidebar.css";

export function SideBar({
  isExpanded,
  sidebarToggle,
  children,
  selectedLink,
  footerProps,
  logo,
  isMobile,
}) {
  const profileChild = [];
  const arrayChildren = [];
  React.Children.forEach(React.Children.toArray(children), (child) => {
    if (child.props.footer) {
      profileChild.push(child);
    } else {
      let mainBody;
      if (child.type === React.Fragment) {
        React.Children.forEach(child.props.children, (childFragment) => {
          mainBody = React.cloneElement(childFragment, {
            isExpanded: isExpanded,
            selectedLink: selectedLink,
            isMobile: isMobile,
          });
          arrayChildren.push(mainBody);
        });
      } else {
        mainBody = React.cloneElement(child, {
          isExpanded: isExpanded,
          selectedLink: selectedLink,
          isMobile: isMobile,
        });
        arrayChildren.push(mainBody);
      }
    }
  });

  const renderButtons = () => {
    if (isExpanded) {
      return (
        <button
          className="sidebar-button"
          onClick={() => sidebarToggle(isExpanded ? false : true)}
        >
          <UilAngleLeftB size={20} />
        </button>
      );
    } else if (!isExpanded && !isMobile) {
      return (
        <button
          className="sidebar-button"
          onClick={() => sidebarToggle(isExpanded ? false : true)}
        >
          <UilAngleRightB size={20} />
        </button>
      );
    }
  };
  return (
    <>
      <div className="top-nav">
        <svg width="30" height="30">
          <image id="nexxt-bot-logo-4" width="30" height="30" href={logo} />
        </svg>
        <UilBars
          size={20}
          onClick={() => sidebarToggle(isExpanded ? false : true)}
        />
      </div>
      <nav
        className="sidebar-inca"
        style={{ width: isExpanded ? "250px" : isMobile ? "0px" : "65px" }}
      >
        <section>{arrayChildren}</section>
        <footer>
          <SideBarItem footer>
            <a
              className="sidebar-footer-item"
              onClick={() => {
                footerProps.openFeedback();
              }}
            >
              <UilCommentAltLines size={20} />
              {isExpanded && (
                <span className="sidebar-item-text">Feedback</span>
              )}
            </a>
          </SideBarItem>
          <SideBarItem footer>
            <a
              className="sidebar-footer-item"
              href={footerProps.helpDeskUrl}
              target="_blank"
              rel="noreferrer"
            >
              <UilQuestionCircle size={20} />
              {isExpanded && <span className="sidebar-item-text">Help</span>}
            </a>
          </SideBarItem>
          {profileChild}
        </footer>
        {renderButtons()}
      </nav>
    </>
  );
}

/**
 * Props include
 * - isActive
 * - isExpanded
 * - selectedLink
 * - key
 */
export function SideBarItem(props) {
  if (props.footer) {
    return (
      <div
        className="sidebar-item-container"
        style={{
          marginRight: props.isExpanded ? "0px" : "-3px",
        }}
      >
        {props.children}
      </div>
    );
  } else if (props.logo) {
    return (
      <div
        className={`sidebar-item-container ${
          !props.isExpanded ? "logo-collapsed" : "logo"
        }`}
      >
        {props.children}
      </div>
    );
  } else {
    let activeItem = "";
    if (props.selectedLink === props.link) {
      activeItem = "active-item";
    }
    if (props.isMobile && !props.isExpanded) {
      activeItem = "";
    }
    return (
      <div
        className={`sidebar-item-container ${activeItem} ${
          props.disabled ? "disabled" : ""
        }`}
        style={{
          marginRight: props.isExpanded ? "0px" : "-3px",
        }}
      >
        {props.children}
      </div>
    );
  }
}
