"use client";
import { HeartStraight } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LoadingHeart from "./LoadingHeart";

const placeholderText = "She is the most...\nHe makes me feel...";

interface FormProps {
  setPickupLine: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ setPickupLine }: FormProps) {
  const [about, setAbout] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const target = document.querySelector("#pickup-line-card");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch("api/generatePickupLine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ about, keywords }),
      });

      const { pickupLine: result } = await response.json();
      if (response.ok) {
        setPickupLine(result);
        handleScroll();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate pickup line");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="shadow-rose-500/4 w-full max-w-xl rounded-xl bg-white/30 p-6 shadow-[0_0_20px_4px] shadow-rose-500/10 backdrop-blur-md md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
        <div className="flex flex-col gap-1 md:gap-2">
          <label
            htmlFor="tell-me"
            className="block font-satisfy text-xl font-semibold text-rose-500 md:text-2xl"
          >
            Tell me about your crush
          </label>
          <textarea
            name="tell-me"
            id="tell-me"
            rows={5}
            required
            placeholder={placeholderText}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="resize-none whitespace-pre-wrap rounded-lg border bg-white/50 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500 md:px-4 md:text-lg"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <label
            htmlFor="Keywords"
            className="block font-satisfy text-xl font-semibold text-rose-500 md:text-2xl"
          >
            Tone
          </label>
          <input
            name="Keywords"
            id="Keywords"
            required
            placeholder="Funny"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="rounded-lg border bg-white/50 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500 md:px-4 md:text-lg"
          ></input>
        </div>
        <div className="flex justify-center">
          <button className="group relative z-10 flex w-44 items-center justify-center gap-2 overflow-hidden rounded-full border border-rose-500 bg-rose-500 px-10 py-2 font-satisfy text-xl font-bold text-white transition duration-500 hover:text-rose-500 hover:shadow-lg hover:shadow-rose-500/30 active:scale-95 md:w-52 md:py-3 md:text-2xl">
            {isLoading ? (
              <LoadingHeart className="h-7 w-7 md:h-8 md:w-8" />
            ) : (
              <>
                Generate <HeartStraight className="-mt-1 size-6" />
              </>
            )}

            <span className="absolute left-0 -z-10 h-full w-[25%] translate-y-full scale-90 rounded-full bg-white transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="absolute left-[25%] -z-10 h-full w-[25%] translate-y-full scale-90 rounded-full bg-white transition-all delay-[75ms] duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="absolute left-[50%] -z-10 h-full w-[25%] translate-y-full scale-90 rounded-full bg-white transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="absolute left-[75%] -z-10 h-full w-[25%] translate-y-full scale-90 rounded-full bg-white transition-all delay-[50ms] duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
          </button>
        </div>
      </form>
    </div>
  );
}
