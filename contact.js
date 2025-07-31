const express = require("express");
const router = express.Router();
const Contact = require("../models/contact"); 

// POST /api/v1/post
router.post("/post", async (req, res) => {
  try {
    const { name, number, address, state, city, message } = req.body;

    // Validate required fields
    if (!name || !number || !address || !state || !city || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({
      name,
      number,
      address,
      state,
      city,
      message
    });

    await newContact.save();

    res.status(200).json({ message: "Data Saved" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
