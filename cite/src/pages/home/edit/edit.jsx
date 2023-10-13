import React from "react";
import { useLocation } from 'react-router-dom'
import { Input } from "../../../components/ui/input/input";
export const Edit = () => {
  let location = useLocation().state
  return (
    <div className="container">
      <Input defaultValue={location} />
    </div>
  );
};
