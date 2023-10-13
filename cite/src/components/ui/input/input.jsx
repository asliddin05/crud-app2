import React from "react";
import { useForm } from "react-hook-form";
import InputStyle from "./input.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/button";
import { request } from "../../../config/request";
export const Input = ({ defaultValue }) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: { ...defaultValue } });

  let submit = state => {
    if (defaultValue) {
      request.put(`/posts/${defaultValue.id}`, state);
      return navigate("/", { replace: true });
    }
    request.post("/posts", state);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        style={{ display: "block" }}
        {...register("name", { required: true })}
        autoComplete="off"
        placeholder="name"
        type="text"
      />
      {errors.name && <p style={{ color: "red" }}>User name eror</p>}
      <input
        style={{ display: "block" }}
        {...register("lastName", { required: true })}
        autoComplete="off"
        placeholder="lastName"
        type="text"
      />
      {errors.lastName && <p style={{ color: "red" }}>User Last name eror</p>}
      <input
        style={{ display: "block" }}
        {...register("age", { required: true })}
        autoComplete="off"
        placeholder="Age"
        type="number"
      />
      {errors.age && <p style={{ color: "red" }}>User age eror</p>}
      <Button className='send' type="submit" variant="btns">
        {defaultValue ? "Edit" : "Sent"}
      </Button>
    </form>
  );
};
