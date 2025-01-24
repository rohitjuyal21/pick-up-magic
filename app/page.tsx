"use client";
import Form from "@/components/Form";
import PickupLineCard from "@/components/PickupLineCard";

import { useState } from "react";

export default function Home() {
  const [pickupLine, setPickupLine] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500/20 via-pink-500/10 to-pink-500/5 p-8">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-500 opacity-20 shadow-[0_0_80px_80px_#f43f5e]"></div>
      <div className="absolute -left-0 -right-10 h-56 w-56 rounded-full bg-pink-500 opacity-20 shadow-[0_0_100px_80px_#ec4899]"></div>
      <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-fuchsia-500 opacity-10 shadow-[0_0_60px_60px_#d946ef]"></div>
      <h1 className="mb-24 text-center font-satisfy text-5xl font-bold text-rose-500">
        Pickup Line Generator
      </h1>
      <Form setPickupLine={setPickupLine} />
      <PickupLineCard pickupLine={pickupLine} />
    </div>
  );
}
