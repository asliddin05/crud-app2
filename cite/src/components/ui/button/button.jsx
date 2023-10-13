import React from "react";
import btnStyle from "./button.module.css";
export const Button = ({
  type,
  onClick,
  children,
  startIcon: Icon,
  endIcon: EndIcon,
  variant,
}) => {
  return (
    <div className="button_block">
    <button
      type={type}
      onClick={onClick}
      className={
        variant === "main_btn"
          ? btnStyle.main_btn
          : variant === "icon_btn"
          ? btnStyle.icon_btn
          : btnStyle.btns
      }>
      {Icon ? <Icon /> : ""} {children} {EndIcon ? <EndIcon /> : ""}
    </button>
    </div>
  );
};
