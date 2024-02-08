const http = require("http");
const fs = require("fs");

const { Player } = require("./game/class/player");
const { World } = require("./game/class/world");

const worldData = require("./game/data/basic-world-data");

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    function redirectIfNoPlayer() {
      if (player) return;
      res.writeHead(302, { Location: "/" });
      res.end();
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if (req.method === "GET" && req.url === "/") {
      // replace availableRooms
      let response = fs.readFileSync("./views/new-player.html", "utf-8");
      response = response.replace(
        /#{availableRooms}/g,
        world.availableRoomsToString()
      );
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(response);
    }

    // Phase 2: POST /player
    if (req.method === "POST" && req.url === "/player") {
      player = new Player(req.body.name, req.body.roomId);
      res.writeHead(302, { Location: `/rooms/${req.body.roomId}` });
      return res.end();
    }

    redirectIfNoPlayer();
    const urlParts = req.url.split("/");
    if (req.method === "GET" && urlParts[1] === "rooms") {
      if (urlParts.length === 3) {
        // Phase 3: GET /rooms/:roomId
        // obtain the current roomId by parsing the URL
        const roomId = req.url.split("/")[2];
        const room = world.rooms[roomId];
        let response = fs.readFileSync("./views/room.html", "utf-8");
        response = response
          .replace(/#{roomName}/g, room.name)
          .replace(/#{inventory}/g, player.inventoryToString())
          .replace(/#{roomItems}/g, room.itemsToString())
          .replace(/#{exits}/, room.exitsToString());

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(response);
      } else if (urlParts.length === 4) {
        // Phase 4: GET /rooms/:roomId/:direction
      }
    }

    redirectIfNoPlayer();
    // Phase 5: POST /items/:itemId/:action
    if (req.method === "POST" && req.url === "/items/:itemId/action") {
    }

    // Phase 6: Redirect if no matching route handlers
    // res.statusCode = 404;
    // res.setHeader("Content-Type", "text/html");
    // return res.end("Page not found");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
