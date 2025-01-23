export default function Home() {
  const placeholderText = "She is the most...\nHe makes me feel...";

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-500/20 via-pink-500/10 to-pink-500/5 min-h-screen">
      <div className="absolute w-40 h-40 bg-rose-500 rounded-full -top-10 -right-10  shadow-[0_0_80px_80px_#f43f5e] opacity-20"></div>
      <div className="absolute w-56 h-56 bg-pink-500 rounded-full -left-0 -right-10  shadow-[0_0_100px_80px_#ec4899] opacity-20"></div>
      <div className="absolute w-56 h-56 bg-fuchsia-500 rounded-full right-0 -bottom-10  shadow-[0_0_60px_60px_#d946ef] opacity-10"></div>
      <h1 className="text-5xl font-bold font-satisfy text-rose-500 mb-24">
        Pickup Line Generator
      </h1>
      <div className="max-w-xl w-full bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-2xl shadow-rose-500/10 space-y-10">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tell-me"
            className="block text-2xl font-semibold text-rose-500 font-satisfy"
          >
            Tell me about your crush
          </label>
          <textarea
            name="tell-me"
            id="tell-me"
            rows={5}
            placeholder={placeholderText}
            className="px-4 py-2 rounded-lg text-lg border resize-none outline-none focus:ring-2 focus:ring-rose-500 bg-white/50 whitespace-pre-wrap"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Keywords"
            className="block text-2xl font-semibold text-rose-500 font-satisfy"
          >
            Keywords
          </label>
          <input
            name="Keywords"
            id="Keywords"
            placeholder="Romantic, Funny, Cute, etc."
            className="px-4 py-2 rounded-lg text-lg border outline-none focus:ring-2 focus:ring-rose-500 bg-white/50"
          ></input>
        </div>
        <div className="flex justify-center">
          <button className="bg-rose-500 px-10 py-3 rounded-full text-white text-2xl font-satisfy">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
