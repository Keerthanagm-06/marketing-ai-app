require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

// Initialize OpenAI client
// It will automatically use the process.env.OPENAI_API_KEY
const openai = new OpenAI();

app.get("/", (req, res) => {
  res.send("Marketing AI Backend Running");
});

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use gpt-4o-mini for cost efficiency while maintaining quality
      messages: [
        {
          role: "system",
          content: "You are an expert AI Marketing Assistant. Your job is to take a user's product/service description and generate highly engaging marketing copy. Provide a catchy Headline, an engaging Body text, and relevant Hashtags. Format your output clearly.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const generatedText = completion.choices[0].message.content;
    res.json({ result: generatedText });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ 
      error: "An error occurred while generating content.",
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});