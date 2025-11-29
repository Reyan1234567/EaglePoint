import { createServer } from "node:http";
const server = createServer((_,res) => {
  const random = Math.floor(Math.random() * 10);
  console.log(random)
  if (random > 5) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Error!")
    return
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
