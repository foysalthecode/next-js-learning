"use server";

import dbconnect, { collectionNames } from "@/lib/dbconnect";

export const getProducts = async () => {
  try {
    const data = await dbconnect(collectionNames.COLLECTION).find().toArray();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
