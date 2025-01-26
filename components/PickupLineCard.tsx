import React, { useState } from "react";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { Copy, DownloadSimple, Shuffle } from "@phosphor-icons/react/dist/ssr";
import html2canvas from "html2canvas";
import { colors } from "@/lib/utils";

const randomEmojis = ["💕", "😍", "🥰", "🤩", "😘", "🤗", "🤩"];

export default function PickupLineCard({ pickupLine }: { pickupLine: string }) {
  const [randomEmoji, setRandomEmoji] = useState(randomEmojis[0]);
  const [currentGradient, setCurrentGradient] = useState(
    "linear-gradient(to bottom, #f43f5e, #ec4899)",
  );

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
      toast.success("Pickup line downloaded!", { icon: randomEmoji });
    });
  };

  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const generateRandomGradient = () => {
    const deg = Math.floor(Math.random() * 360);
    return `linear-gradient(${deg}deg, ${randomColor()}, ${randomColor()})`;
  };

  const handleGradient = () => {
    const gradient = generateRandomGradient();
    console.log("Generated Gradient:", gradient);
    setCurrentGradient(gradient);
  };

  return (
    <div
      className={`my-20 flex w-full flex-col items-center ${
        pickupLine ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        id="pickup-line-card"
        className={`flex min-h-96 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl p-8`}
        style={{ background: currentGradient }}
      >
        <p
          onClick={handleCopy}
          className="cursor-copy text-center font-satisfy text-2xl text-white md:text-3xl"
        >
          {pickupLine}
        </p>
      </div>

      <div className="mt-5 flex w-full max-w-md items-end justify-end gap-4">
        <button
          onClick={handleGradient}
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
          title="Download Pickup Line Card"
          className="rounded-lg border bg-white/50 p-2 text-rose-500 hover:bg-gray-100 active:scale-95"
        >
          <DownloadSimple className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
