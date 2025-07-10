"use server";

import dbconnect, { collectionNames } from "@/lib/dbconnect";

export const postSingleData = async (postedData) => {
  try {
    const result = await dbconnect(collectionNames.COLLECTION).insertOne(postedData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
