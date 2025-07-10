import dbconnect, { collectionNames } from "@/lib/dbconnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbconnect(collectionNames.COLLECTION).find().toArray();

  return Response.json(data);
}
export async function POST(req) {
 
}
