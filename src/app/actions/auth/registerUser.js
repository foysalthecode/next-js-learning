"use server";

import dbconnect from "@/lib/dbconnect";

export const registerUser = async (payload) => {
  //need to check if unique username was given

  try {
    const result = await dbconnect("test-user").insertOne(payload);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
