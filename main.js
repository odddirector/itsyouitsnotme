const net = require("net");
let { RiTa } = require('rita'); /* rednoise.org/rita */
let rhymes = require('rhymes'); /* npmjs.com/package/rhymes */

const sendResponse = (
  socket,
  { status = 200, statusText = "OK", contentType = "text/plain", body = "" }
) => {
  const headers = `Content-Type: ${contentType}\r\nContent-Length: ${Buffer.byteLength(
    body
  )}\r\n\r\n`;
  socket.write(`HTTP/1.1 ${status} ${statusText}\r\n${headers}${body}`);
};

const handleGetRequest = (socket, path, headers) => {
  let pathString = path.slice(1);
  let rhymeObjects = rhymes(pathString); //returns an array of objects
  let rhymedWords = [];
  for (let index = 0; index < rhymeObjects.length; index++) {
    rhymedWords.push(rhymeObjects[index].word);
  }
  if(String(rhymedWords).length != 0) {
    sendResponse(socket, { body: String(rhymedWords) });
  } else {
    sendResponse(socket, { body: String(RiTa.rhymesSync(pathString)) });
  }
  console.log("Rita: "+String(RiTa.rhymesSync(pathString)));
  console.log("rhyme: "+String(rhymedWords));
  
};

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const [startLine, ...headers] = data.toString().split("\r\n");
    const [httpMethod, path, _httpVersion] = startLine.split(" ");

    switch (httpMethod) {
      case "GET": {
        handleGetRequest(socket, path, headers);
        break;
      }
    }
  });

  socket.on("close", () => {
    socket.end();
  });
});

server.listen(4221, "localhost");