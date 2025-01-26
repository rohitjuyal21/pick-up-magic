import { OpenAI } from "openai";

export async function POST(req: Request) {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const { about, keywords } = await req.json();

  try {
    const prompt = `Generate a pickup line for my crush, who is ${about}. Tone: ${keywords || "romantic"}.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 70,
    });

    const result = response.choices[0]?.message?.content;
    console.log(response.choices[0].message);
    return Response.json({ pickupLine: result });
  } catch (error) {
    console.error("Error generating pickup line:", error);
    return Response.json(
      { error: "Failed to generate pickup line" },
      { status: 500 },
    );
  }
}
