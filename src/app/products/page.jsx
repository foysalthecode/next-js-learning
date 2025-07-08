import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "../actions/products/getProducts";

export const dynamic = "force-dynamic";

const Products = async () => {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  // const res = await fetch(
  //   "https://learning-nextjs-phi-two.vercel.app//api/items"
  // );
  // const data = await res.json();
  const data = await getProducts();
  return (
    <div>
      {data.map((singleData) => {
        return (
          <div key={singleData._id}>
            <ul>
              <li>Name :{singleData.name}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
