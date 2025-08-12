# Google Gemini Integration Guide

This guide explains how to use Google Gemini models with the AI Research Assistant.

## Supported Gemini Models

The AI Research Assistant now supports the following Google Gemini models:
- **Gemini 1.5 Pro** (`gemini-1.5-pro`) - Most capable model for complex reasoning
- **Gemini 1.5 Flash** (`gemini-1.5-flash`) - Faster, optimized for speed and efficiency

## Setup Instructions

### Method 1: Using Google AI Studio API (Recommended for individual use)

1. Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. In Zotero preferences, go to **Aria** settings
3. Set your **OpenAI API Key** field to your Google AI API key
4. Select one of the Gemini models from the model dropdown
5. The base URL will be automatically configured for Google's API

### Method 2: Using Vertex AI (For enterprise/production use)

1. Set up a Google Cloud Project with Vertex AI enabled
2. Get your Vertex AI API key or service account credentials
3. In Zotero preferences:
   - Set your **OpenAI API Key** to your Google Cloud API key
   - Set **OpenAI API Base URL** to your Vertex AI endpoint:
     ```
     https://LOCATION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/publishers/google/models
     ```
   - Select one of the Gemini models

### Method 3: Using a Proxy Service

You can also use services like LiteLLM or other OpenAI-compatible proxies that support Gemini models.

## Important Notes

- **API Key**: Use your Google AI or Google Cloud API key in the "OpenAI API Key" field
- **Base URL**: The system automatically detects Gemini models and configures the appropriate endpoint
- **Compatibility**: Gemini models work through OpenAI-compatible APIs, so all existing features should work
- **Restart Required**: You must restart Zotero after changing model settings

## Troubleshooting

If you encounter issues:

1. **Authentication Errors**: Verify your API key is correct and has the necessary permissions
2. **Model Not Found**: Ensure the model is available in your region/project
3. **Rate Limits**: Google APIs have different rate limits than OpenAI

## Features Support

Gemini models support all the same features as OpenAI models:
- Text generation and Q&A
- Document search and analysis
- Vision capabilities (for supported models)
- Citation generation
- All Zotero integration features

The integration maintains full compatibility with the existing OpenAI library and workflow.