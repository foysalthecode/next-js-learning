"use server";

export const postSingleData = async (postedData) => {
  try {
    const result = await dbconnect("collection").insertOne(postedData);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
