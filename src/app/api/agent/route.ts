import { NextRequest, NextResponse } from "next/server";

type MessagePayload = {
  role: "system" | "assistant" | "user";
  content: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.messages || !Array.isArray(body.messages)) {
    return NextResponse.json(
      { error: "Envie um array de mensagens para o agente" },
      { status: 400 },
    );
  }

  const formattedMessages: MessagePayload[] = body.messages.map((message: any) => ({
    role:
      message.role === "assistant" || message.role === "system"
        ? message.role
        : "user",
    content: String(message.content ?? ""),
  }));

  const rawApiKey = process.env.OPENAI_API_KEY ?? "";
  if (!rawApiKey.trim()) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY não configurada no ambiente" },
      { status: 500 },
    );
  }
  const apiKey = rawApiKey.trim().replace(/^key:\s*/i, "");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: formattedMessages,
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: `Erro OpenAI: ${errorText}` },
      { status: response.status },
    );
  }

  const data = await response.json().catch(() => null);
  const reply = data?.choices?.[0]?.message?.content?.trim();

  return NextResponse.json({
    reply: reply ?? "Ainda estou a pensar nisso. Peça outra vez.",
  });
}
