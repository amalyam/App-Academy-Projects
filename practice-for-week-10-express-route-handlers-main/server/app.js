// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

// Get a specific artist's details based on artistId
app.get("/artists/:artistId", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(getArtistByArtistId(req.params.artistId));
});

// Edit a specified artist by artistId
app.patch("/artists/:artistId", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(editArtistByArtistId(req.params.artistId, req.body));
});

// Delete a specified artist by artistId
app.delete("/artists/:artistId", (req, res) => {
  res.status(204);
  res.set("Content-Type", "application/json");
  res.send(deleteArtistByArtistId(req.params.artistId));
});

// Get all albums of a specific artist based on artistId
app.get("/artists/:artistId/albums", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(getAlbumsByArtistId(req.params.artistId));
});

// Get a specific album's details based on albumId
app.get("/albums/:albumId", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(getAlbumByAlbumId(req.params.albumId));
});

// Add an album to a specific artist based on artistId
app.post("/artists/:artistId/albums", (req, res) => {
  res.status(201);
  res.set("Content-Type", "application/json");
  res.send(addAlbumByArtistId(req.params.artistId, req.body));
});

// Edit a specified album by albumId
app.patch("/albums/:albumId", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(editAlbumByAlbumId(req.params.albumId));
});

// Delete a specified album by albumId
app.delete("/albums/:albumId", (req, res) => {
  res.status(204);
  res.set("Content-Type", "application/json");
  res.send(deleteAlbumByAlbumId(req.params.albumId));
});

// Get all albums with names filtered by first letter
app.get("/albums", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  if (req.query.startsWith) {
    res.send(getFilteredAlbums(req.query.startsWith));
  } else {
    res.send(getAllAlbums());
  }
});

// Get all songs of a specific artist based on artistId
app.get("/artists/:artistId/songs", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(getSongsByArtistId(req.params.artistId));
});

// Get all songs of a specific album based on albumId
app.get("/albums/:albumId/songs", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(getSongsByAlbumId(req.params.albumId));
});

// Get a specific song's details based on songId
app.get("/songs/:songId", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(getSongBySongId(req.params.songId));
});

// Add a song to a specific album based on albumId
app.post("/albums/:albumId/song", (req, res) => {
  res.status(201);
  res.set("Content-Type", "application/json");
  res.send(addSongByAlbumId(req.params.albumId, req.body));
});

// Edit a specified song by songId
app.patch("/songs/:songId", (req, res) => {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(editSongBySongId(req.params.songId, req.body));
});

// Delete a specified song by songId
app.delete("/songs/:songId", (req, res) => {
  res.status(204);
  res.set("Content-Type", "application/json");
  res.send(deleteSongBySongId(req.params.songId));
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
