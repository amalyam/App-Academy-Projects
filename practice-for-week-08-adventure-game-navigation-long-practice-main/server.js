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

    function redirectIfWrongAction(action) {
      try {
        action;
      } catch (e) {
        let response = fs.readFileSync("./views/error.html", "utf-8");
        response = response
          .replace(/#{errorMessage}/, e)
          .replace(/#{roomId}/, player.currentRoom);
      }
    }

    /* ======================== ROUTE HANDLERS ========================== */
    const urlParts = req.url.split("/");

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
      player = new Player(req.body.name, world.rooms[req.body.roomId]);
      console.log(player);
      res.writeHead(302, { Location: `/rooms/${req.body.roomId}` });
      return res.end();
    }

    redirectIfNoPlayer();
    if (req.method === "GET" && urlParts[1] === "rooms") {
      // obtain the current roomId by parsing the URL
      const roomId = urlParts[2];
      const requestedRoom = world.rooms[roomId];

      // if the specified `:roomId` route parameter is not the `roomId`
      // of the player's current room, redirect client to correct
      // current room of player
      if (requestedRoom !== player.currentRoom) {
        for (const room in world.rooms) {
          if (world.rooms[room].name === player.currentRoom.name) {
            res.writeHead(302, {
              Location: `/rooms/${room}`,
            });
            return res.end();
          }
        }
      }
      // Phase 3: GET /rooms/:roomId
      if (urlParts.length === 3) {
        let response = fs.readFileSync("./views/room.html", "utf-8");
        response = response
          .replace(/#{roomName}/g, requestedRoom.name)
          .replace(/#{inventory}/g, player.inventoryToString())
          .replace(/#{roomItems}/g, requestedRoom.itemsToString())
          .replace(/#{exits}/, requestedRoom.exitsToString());

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(response);
      } else if (urlParts.length === 4) {
        // Phase 4: GET /rooms/:roomId/:direction
        const direction = urlParts[3];
        const nextRoom = player.move(direction[0]);
        try {
          res.writeHead(302, { Location: `/rooms/${nextRoom}` });
          return res.end();
        } catch (e) {
          console.log(e);
        }
      }
    }

    redirectIfNoPlayer();
    // Phase 5: POST /items/:itemId/:action
    if (req.method === "POST" && req.url.startsWith("/items")) {
      const itemId = urlParts[2];
      const action = urlParts[3];

      try {
        switch (action) {
          case "drop":
            redirectIfWrongAction(player.dropItem(itemId));
            break;
          case "eat":
            redirectIfWrongAction(player.eatItem(itemId));
            break;
          case "take":
            redirectIfWrongAction(player.takeItem(itemId));
            break;
        }
      } catch (e) {
        console.log(e);
      } finally {
        res.writeHead(302, { Location: `/rooms/${player.currentRoom}` });
        res.end();
      }
    }

    // Phase 6: Redirect if no matching route handlers
    // res.statusCode = 404;
    // res.setHeader("Content-Type", "text/html");
    // return res.end("Page not found");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
