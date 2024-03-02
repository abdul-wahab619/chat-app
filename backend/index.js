const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const result = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "  0b52b37f-3aaf-47ab-ba4b-fb14246b99f9" } }
    );
    return res.status(result.status).json(result.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
