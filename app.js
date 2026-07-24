import express from "express";
const app = express();
import playlistsRouter from "#api/playlists";
import tracksRouter from "#api/tracks";

app.use(express.json());

app.use("/playlists", playlistsRouter);
app.use("/tracks", tracksRouter);



app.use((err, req, res, next) => {
  // Foreign key violation
  if (err.code === "23503") {
    return res.status(400).send(err.detail);
  }

  next(err);
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});


export default app;