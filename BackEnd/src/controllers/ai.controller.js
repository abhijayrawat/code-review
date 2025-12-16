import { generateCodeReview } from "../services/ai.service.js";

export const getReview = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const review = await generateCodeReview(code);
    res.json({ review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
