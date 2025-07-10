import dbconnect, { collectionNames } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  //   const id = String(p.id);
  const singleData = await dbconnect(collectionNames.COLLECTION).findOne({ _id: p.id });
  return Response.json(singleData);
}
export async function DELETE(req, { params }) {
  const p = await params;
  const response = await dbconnect(collectionNames.COLLECTION).deleteOne({ _id: p.id });

  return Response.json(response);
}
export async function PATCH(req, { params }) {
  const p = await params;
  const postedData = await req.json();
  const filter = { _id: p.id };
  const updatedResponse = await dbconnect(collectionNames.COLLECTION).updateOne(
    filter,
    {
      $set: { ...postedData },
    },
    { upsert: true }
  );

  return Response.json(updatedResponse);
}
