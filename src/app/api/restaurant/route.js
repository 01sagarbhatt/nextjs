import { ConnectionString } from "@/app/lib/Database";
import { RestaurantSchema } from "@/app/lib/Model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET()
{
          await mongoose.connect(ConnectionString);
          const data = await RestaurantSchema.find();
  
     
          return NextResponse.json({ result: data });
}