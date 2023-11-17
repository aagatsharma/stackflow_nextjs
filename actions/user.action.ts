"use server";

import User from "@/database/user.model";
import { connectToDB } from "@/lib/mongoose";

import {
  CreateUserParams,
  DeleteUserParams,
  GetUserByIdParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

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

export async function createUser(userParam: CreateUserParams) {
  try {
    connectToDB();
    const newUser = await User.create(userParam);
    return newUser;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDB();
    const { clerkId, updateData, path } = params;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDB();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );

    await Question.deleteMany({ author: user._id });

    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}
