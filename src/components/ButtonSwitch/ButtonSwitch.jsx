import React from "react";
import "./ButtonSwitch.css";

export function ButtonSwitch({
  checked = false,
  left,
  right,
  onChange,
  disabled,
}) {
  return (
    <label className="b-switch-ButtonSwitch">
      <div className="b-switch-switch-container">
        <span
          className={`b-switch-option ${!checked ? "b-switch-active" : ""}`}
        >
          {left}
        </span>
        <span className={`b-switch-option ${checked ? "b-switch-active" : ""}`}>
          {right}
        </span>
      </div>
      <input
        className="b-switch-slider-input"
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          onChange(event.target.checked);
        }}
        disabled={disabled}
      />
      <span className="b-switch-slider"></span>
    </label>
  );
}
