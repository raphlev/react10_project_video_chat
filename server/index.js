const express = require("express");

const PORT = process.env.PORT || 5000;
const INDEX = "/index.html";
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const origin = process.env.PORT
  ? "https://rlu-gdoc.netlify.app"
  : "http://localhost:3000";
const io = require("socket.io")(server, {
  cors: {
    origin: origin,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});
