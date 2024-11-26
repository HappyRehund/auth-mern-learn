const axios = require("axios");

const TOKEN = "980cd07c81de3751c6a33ebfb56b1ab4";

axios
  .post(
    "https://send.api.mailtrap.io/api/send",
    {
      from: { email: "hello@demomailtrap.com", name: "Mailtrap Test" },
      to: [{ email: "rayhanardian045@gmail.com" }],
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  )
  .then((response) => console.log("Email sent successfully:", response.data))
  .catch((error) => console.error("Error sending email:", error));
