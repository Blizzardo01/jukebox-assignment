import express from "express";
import { fetch_all_tracks, fetch_track_by_id } from "#db/tracks";

const tracksRouter = express.Router();

tracksRouter.get('/', async (req, res, next) => {
    const tracks = await fetch_all_tracks();
    res.send(tracks);
});

tracksRouter.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    if (isNaN(id)) {
        res.status(400).send("track id is not a number.");
    }
    const track = await fetch_track_by_id(id);

    if (!track) {
        res.status(404).send("Track does not exist.");
    }
    res.send(track);
});


export default tracksRouter;