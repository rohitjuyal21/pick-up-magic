"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HeartStraight } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import toast from "react-hot-toast";

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
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
      );
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const prompt = `Generate one pickup line for my crush. She is the most ${about} and makes me feel ${keywords || "happy"}.`;

      const result = await model.generateContent(prompt);

      setPickupLine(result.response.text());
      handleScroll();

      console.log(result.response.text());
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate pickup line");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl rounded-xl bg-white/30 p-8 shadow-2xl shadow-rose-500/10 backdrop-blur-md">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tell-me"
            className="block font-satisfy text-2xl font-semibold text-rose-500"
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
            className="resize-none whitespace-pre-wrap rounded-lg border bg-white/50 px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-rose-500"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Keywords"
            className="block font-satisfy text-2xl font-semibold text-rose-500"
          >
            Keywords
          </label>
          <input
            name="Keywords"
            id="Keywords"
            placeholder="Romantic, Funny, Cute, etc."
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="rounded-lg border bg-white/50 px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-rose-500"
          ></input>
        </div>
        <div className="flex justify-center">
          <button className="group relative z-10 flex w-52 items-center justify-center gap-2 overflow-hidden rounded-full border border-rose-500 bg-rose-500 px-10 py-3 font-satisfy text-2xl font-bold text-white transition duration-500 hover:text-rose-500 hover:shadow-lg hover:shadow-rose-500/30 active:scale-95">
            Generate <HeartStraight className="inline-block size-6" />
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
