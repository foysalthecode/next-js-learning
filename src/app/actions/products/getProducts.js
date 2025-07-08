"use server";

import dbconnect from "@/lib/dbconnect";

export const getProducts = async () => {
  try {
    const data = await dbconnect("collection").find().toArray();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
