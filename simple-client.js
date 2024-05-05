const http = require("node:http");

const agent = new http.Agent({ keepAlive: true });

const request = http.request({
  agent,
  hostname: "localhost",
  port: 8050,
  method: "POST",
  path: "/create-post",
  headers: {
    "Content-Type": "application/json",
    name: "Ivan",
  },
});

request.on("response", (response) => {
  console.log("------ STATUS: --------");
  console.log(response.statusCode);

  console.log("------ HEADERS: --------");
  console.log(response.headers);

  console.log("------ BODY: --------");
  response.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  response.on("end", () => {
    console.log("No more data in response");
  });
});

request.end(
  JSON.stringify({
    title: "Post title",
    body: "This is some text of the post and more and more...",
  }),
);
