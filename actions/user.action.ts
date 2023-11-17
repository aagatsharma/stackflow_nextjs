"use server";

import User from "@/database/user.model";
import { connectToDB } from "@/lib/mongoose";
import console from "console";
import { GetUserByIdParams } from "./shared.types";

export async function getUserById(params: GetUserByIdParams) {
  try {
    connectToDB();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}
