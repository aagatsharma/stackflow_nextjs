"use server";

import { connectToDB } from "@/lib/mongoose";

export async function createQuestion(params: any) {
  try {
    // connect to db
    connectToDB();
  } catch (error) {}
}
