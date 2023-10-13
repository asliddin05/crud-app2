import React from "react";
import { request } from "../../config/request";
import { PostCart } from "../../components/cart/post-cart";
export const Home = () => {
  let [data, setData] = React.useState([]);
  // get data function
  let getData = async () => {
    try {
      let res = await request.get("/posts");
      setData(res.data);
    } catch (error) {}
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      {data.map(item => (
        <PostCart refetch={getData} key={item.id} {...item} />
      ))}
    </div>
  );
};
