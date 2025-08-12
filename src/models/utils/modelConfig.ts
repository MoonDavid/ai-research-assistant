import { config } from "../../../package.json"
import { getPref } from "../../utils/prefs"

/**
 * Get API configuration for OpenAI client based on the selected model
 */
export function getAPIConfig(model?: string) {
  const selectedModel = model || (getPref("OPENAI_MODEL") as string) || "gpt-4o"
  const apiKey = getPref("OPENAI_API_KEY") as string
  const baseURL = (getPref("OPENAI_BASE_URL") as string) || "https://api.openai.com/v1"
  
  // Check if this is a Gemini model
  if (selectedModel.startsWith("gemini-")) {
    // For Gemini models, use Google's Generative Language API with OpenAI compatibility
    // If user hasn't configured a custom base URL for Gemini, use the default
    const geminiBaseURL = baseURL.includes("googleapis.com") || baseURL.includes("generativelanguage") 
      ? baseURL 
      : "https://generativelanguage.googleapis.com/v1beta/openai/"
    
    return {
      apiKey,
      baseURL: geminiBaseURL,
    }
  }
  
  // For OpenAI models, use standard configuration
  return {
    apiKey,
    baseURL,
  }
}

/**
 * Get LangChain model configuration
 */
export function getLangChainConfig() {
  const apiKey = (Zotero.Prefs.get(`${config.addonRef}.OPENAI_API_KEY`) as string) || "YOUR_OPENAI_API_KEY"
  const model = (Zotero.Prefs.get(`${config.addonRef}.OPENAI_MODEL`) as string) || "gpt-4o"
  const baseURL = (Zotero.Prefs.get(`${config.addonRef}.OPENAI_BASE_URL`) as string) || "https://api.openai.com/v1"
  
  // For Gemini models, use appropriate base URL if not already configured
  let finalBaseURL = baseURL
  if (model.startsWith("gemini-") && !baseURL.includes("googleapis.com") && !baseURL.includes("generativelanguage")) {
    finalBaseURL = "https://generativelanguage.googleapis.com/v1beta/openai/"
  }
  
  return {
    apiKey,
    model,
    baseURL: finalBaseURL,
  }
}

/**
 * Check if a model is a Gemini model
 */
export function isGeminiModel(model: string): boolean {
  return model.startsWith("gemini-")
}

/**
 * Get supported Gemini models
 */
export function getSupportedGeminiModels(): string[] {
  return ["gemini-1.5-pro", "gemini-1.5-flash"]
}