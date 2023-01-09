const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/auth.js");
const twilio = require("twilio");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioClinet = require("twilio")(accountSid, authToken);
// const messageServiceSid = process.env.SID;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.route("/").get((req, res) => {
  res.send("Hello world");
});
// app.post("/", (req, res) => {
//   const { message, user: sender, type, members } = req.body;
//   if (type === "message.new") {
//     members
//       .filter((member) => member.user.id !== sender.id)
//       .forEach(({ user }) => {
//         if (!user.online) {
//           twilioClinet.messages
//             .create({
//               body: `you have a new message ${message.user.fullName} - ${message.text}`,
//               messagingServiceSid: messageServiceSid,
//               to: user.phoneNumber,
//             })
//             .then(() => console.log("Message sent"))
//             .catch((err) => console.log(err));
//         }
//       });
//     res.status(200).send("message send");
//   }
//   return res.status(200).send("Not a new message request");
// });
app.use("/auth", authRoutes);
app.listen(PORT, function () {
  console.log("App is running on port " + PORT);
});
