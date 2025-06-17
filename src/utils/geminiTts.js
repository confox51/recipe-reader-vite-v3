import { GoogleGenAI } from '@google/genai';
  
export const callGeminiAPI = async (prompt) => {
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_TEST_KEY,
    });
    const config = {
      responseMimeType: 'text/plain',
    };
    const model = 'gemma-3n-e4b-it';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];
  
    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });
    return response.text;
};