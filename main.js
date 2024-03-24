const net = require("net");
let { RiTa } = require('rita'); /* rednoise.org/rita */
let rhymes = require('rhymes'); /* npmjs.com/package/rhymes */
const verbs = require('./verbs.js');

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
  let initialPathString = path.slice(1).replace(/_/g, ' ');
  let pathString = path.slice(1);

  // only rhyme on the second word
  if(pathString.includes("_")) {
    pathString = pathString.split("_")[1];
  } else if (pathString.includes("-")) {
    pathString = pathString.split("-")[1];
  }

  let rhymeObjects = rhymes(pathString); //returns an array of objects
  let rhymedWords = [];
  let randomRhyme;
  let article = "a";
  for (let index = 0; index < rhymeObjects.length; index++) {
    rhymedWords.push(rhymeObjects[index].word);
  }
  if(String(rhymedWords).length != 0) {
    randomRhyme = rhymedWords[getRandomInt(0, rhymedWords.length-1)];
  } else {
    randomRhyme = RiTa.rhymesSync(pathString)[getRandomInt(0, rhymedWords.length-1)];
  }

  const isFirstCharacterVowel = /^[aeiou]/i.test(randomRhyme);

  if(isFirstCharacterVowel) {
    article = "an";
  }

  let completeSentence = verbs[getRandomInt(0, verbs.length-1)] + " " + article + " " + randomRhyme;

  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${initialPathString} ${completeSentence}</title>
      <style>
        p {
          font-family: sans-serif;
          font-weight: bold;
          font-size: 14vw;
          text-align: center;
          text-transform: uppercase;
          margin-top: 5vw;
        }
      </style>
    </head>
    <body>
      <p>${pathString},<br>${completeSentence}</p>
    </body>
    </html>
  `;

  sendResponse(socket, { contentType: "text/html", body: htmlResponse });

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

server.listen(4221, "localhost");