const net = require("net");

const dotenv = require("dotenv");
dotenv.config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const homePrompts = require("./homePrompts");
const pagesPrompts = require("./pagesPrompts");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const sendResponse = (
  socket,
  { status = 200, statusText = "OK", contentType = "text/plain", body = "" }
) => {
  const headers = `Content-Type: ${contentType}\r\nContent-Length: ${Buffer.byteLength(
    body
  )}\r\n\r\n`;
  socket.write(`HTTP/1.1 ${status} ${statusText}\r\n${headers}${body}`);
};

async function handleGetRequestAI(socket, path, headers) {
  let initialPathString = path.slice(1).replace(/_/g, " ");

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  let prompt;

  if (path == "/") {
    prompt = homePrompts.p_five;
  } else {
    prompt = pagesPrompts(initialPathString).p_three;
  }

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response
    .text()
    .replace(/```html/g, "")
    .replace(/```/g, "");

  sendResponse(socket, { contentType: "text/html", body: text });
}

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const [startLine, ...headers] = data.toString().split("\r\n");
    const [httpMethod, path, _httpVersion] = startLine.split(" ");

    switch (httpMethod) {
      case "GET": {
        handleGetRequestAI(socket, path, headers);
        break;
      }
    }
  });

  socket.on("close", () => {
    socket.end();
  });
});

server.listen(4221, "localhost");
