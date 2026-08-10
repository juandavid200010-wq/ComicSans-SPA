import { characters } from './characters.js';

export function formatMessagesForGemini(messages) {
    return messages.map(msg => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }]
    }));
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método no permitido" });
    }
    try {
        const { messages, character } = req.body;
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: "Se requiere un array de mensajes" });
        }
        const selectedCharacter = characters[character];
        if (!selectedCharacter) {
            return res.status(400).json({ error: "Personaje no válido" });
        }
        const systemPrompt = selectedCharacter.systemPrompt;
        const contents = formatMessagesForGemini(messages);
        const apiKey = process.env.GEMINI_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;
        const geminiResponse = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_instruction: {
                    parts: [{ text: systemPrompt }]
                },
                contents
            })
        });

        if (!geminiResponse.ok) {
            const errorData = await geminiResponse.json();
            console.error("Error de Gemini:", errorData);
            return res.status(502).json({ error: "Error al conectar con Gemini" });
        }

        const data = await geminiResponse.json();
        const textoRespuesta = data.candidates?.[0]?.content?.parts?.[0]?.text || "No se recibió respuesta.";
        return res.status(200).json({ text: textoRespuesta });

    } catch (error) {
        console.error("Error en la función:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}