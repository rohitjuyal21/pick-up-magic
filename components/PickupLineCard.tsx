import React, { useState } from "react";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { Copy, DownloadSimple, Shuffle } from "@phosphor-icons/react/dist/ssr";
import html2canvas from "html2canvas";
import { gradients } from "@/lib/utils";

const randomEmojis = ["💕", "😍", "🥰", "🤩", "😘", "🤗", "🤩"];

export default function PickupLineCard({ pickupLine }: { pickupLine: string }) {
  const [randomEmoji, setRandomEmoji] = useState(randomEmojis[0]);

  const [curretGradient, setCurrentGradient] = useState(gradients[0]);

  const handleCopy = () => {
    copy(pickupLine);
    setRandomEmoji(
      randomEmojis[Math.floor(Math.random() * randomEmojis.length)],
    );
    toast.success("Pickup line copied!", { icon: randomEmoji });
  };

  const handleDownload = () => {
    const cardElement = document.querySelector("#pickup-line-card");
    html2canvas(cardElement as HTMLElement, {
      backgroundColor: null,
      x: 0,
      y: 0,
      width: cardElement?.clientWidth,
      height: cardElement?.clientHeight,
    }).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = img;
      link.download = "pickup-line.png";
      link.click();
    });
  };

  const handleGradientChange = () => {
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];
    setCurrentGradient(randomGradient);
  };

  return (
    <div
      className={`my-20 flex w-full flex-col items-center ${pickupLine ? "opacity-100" : "opacity-0"}`}
    >
      <div
        id="pickup-line-card"
        className={`to-fuchsia-500-500/80 via-rose-500/ 0 flex min-h-96 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-rose-500 bg-gradient-to-b from-rose-500/70 via-rose-500/40 to-pink-500/70 p-8 font-satisfy ${curretGradient} `}
      >
        <p
          onClick={handleCopy}
          className="cursor-copy text-center text-2xl text-white md:text-3xl"
        >
          {pickupLine}
        </p>
      </div>

      <div className="mt-5 flex w-full max-w-md items-end justify-end gap-4">
        <button
          onClick={handleGradientChange}
          className="flex items-center gap-2 rounded-lg border bg-white/50 px-4 py-2 text-rose-500 hover:bg-gray-100 active:scale-95"
        >
          <Shuffle className="h-6 w-6" />
          Random Gradient
        </button>
        <button
          onClick={handleCopy}
          className="rounded-lg border bg-white/50 p-2 text-rose-500 hover:bg-gray-100 active:scale-95"
        >
          <Copy className="h-6 w-6" />
        </button>
        <button
          onClick={handleDownload}
          className="rounded-lg border bg-white/50 p-2 text-rose-500 hover:bg-gray-100 active:scale-95"
        >
          <DownloadSimple className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
