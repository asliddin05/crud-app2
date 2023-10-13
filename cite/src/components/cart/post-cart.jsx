import React from "react";
import { Button } from "../ui/button/button";
import { useNavigate } from "react-router-dom";
import { request } from "../../config/request";

import "./cart.css"
export const PostCart = ({ id, name, lastName, age, refetch }) => {
  let navigate = useNavigate();
  let deletePost = async () => {
    try {
      await request.delete(`/posts/${id}`);
      refetch();
    } catch (error) {}
  };
  let editPost = () => {
    navigate("/edit", { state: { id, name, lastName, age } });
    refetch();
  };
  return (
    <div className="container">
    <div className="cart-content">
      <h2 className="cart-title">{name}</h2>
      <p className="cart_text">{lastName}</p>
      <p className="cart_text">{age}</p>
      <Button onClick={deletePost} variant="main_btn">
        Delete
      </Button>
      <Button onClick={editPost} variant="icon_btn">
        Edit
      </Button>
    </div>
    </div>
  );
};
