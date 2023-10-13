import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button/button";
import HeaderStyle from "./header.module.css";
export const Header = () => {
  let location = useLocation();
  let navigate = useNavigate();

  let changePost = () => {
    if (location.pathname == "/create-post" || location.pathname == "/edit") {
      return navigate("/");
    }
    navigate("/create-post");
  };
  return (
    <div className="container">
      <Button onClick={changePost} variant="main_btn">
        {location.pathname == "/create-post"
          ? "Back"
          : location.pathname == "/edit"
          ? "Back"
          : " CreatePost"}
      </Button>
    </div>
  );
};
