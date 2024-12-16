import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function generateResponse(
  context: string,
  customerType: string,
  userMessage: string
) {
  const systemPrompt = `Tu es un client potentiel français de type "${customerType}". 
    Contexte de l'entreprise: ${context}. 
    Réponds de manière naturelle et cohérente avec ton profil.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ],
    temperature: 0.7,
    max_tokens: 150,
  });

  return response.choices[0].message.content;
}