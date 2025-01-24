"use client";
import React from "react";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";

const randomEmojis = ["💕", "😍", "🥰", "🤩", "😘", "🤗", "🤩"];

export default function PickupLineCard({ pickupLine }: { pickupLine: string }) {
  const [randomEmoji, setRandomEmoji] = React.useState(randomEmojis[0]);

  const handleCopy = () => {
    copy(pickupLine);
    setRandomEmoji(
      randomEmojis[Math.floor(Math.random() * randomEmojis.length)],
    );
    toast.success("Pickup line copied!", { icon: randomEmoji });
  };

  return (
    <div
      id="pickup-line-card"
      className="to-fuchsia-500-500/80 via-rose-500/ mt-20 flex min-h-96 w-full max-w-md items-center justify-center rounded-2xl bg-rose-500 bg-gradient-to-b from-rose-500/70 via-rose-500/40 to-pink-500/70 p-8 font-satisfy"
    >
      <p
        onClick={handleCopy}
        className="cursor-copy text-center text-3xl text-white"
      >
        {pickupLine}
      </p>
    </div>
  );
}
