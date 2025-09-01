import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export const gemini = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);
