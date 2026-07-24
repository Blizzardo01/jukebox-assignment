import app from "#app";
import { add_new_playlist, fetch_all_playlists, fetch_playlist_by_id, fetch_tracks_by_playlist_id } from "#db/playlists";
import { createTrack } from "#db/tracks";
import { create_playlist_track } from "#db/playlists_tracks";
import express from "express";

const playlistsRouter = express.Router('/playlists');




playlistsRouter.get('/', async (req, res, next) => {
    const playlists = await fetch_all_playlists();
    res.send(playlists);
})


playlistsRouter.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(400).send("id is not a number.")
    }

    console.log(id);

    const playlist = await fetch_playlist_by_id(id);

    if (!playlist) {
        res.status(404).send("Requested playlist does not exist");
    }
    res.send(playlist);

});


playlistsRouter.get('/:id/tracks', async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(400).send("id is not a number.");
    }

    const playlist = await fetch_playlist_by_id(id);

    if (!playlist) {
        res.status(404).send("playlist does not exist.");
    }

    const tracks = await fetch_tracks_by_playlist_id(id);


    console.log(tracks);

    res.send(tracks);
});


playlistsRouter.post('/', async (req, res, next) => {
    const playlist = req.body;

    if (!playlist) {
        res.status(400).send("playlist missing.");
    }

    const {name, description} = playlist;
    if ( !name || !description) {
        res.status(400).send("playlist missing fields.");
    }

    
    console.log(playlist);
    const newPlaylist = await add_new_playlist(playlist);

    res.status(201).send(newPlaylist);
});


playlistsRouter.post('/:id/tracks', async (req, res, next) => {
    const { id } = req.params;
    const track = req.body;

    if (isNaN(id)) {
        res.status(400).send("id is not a num")
    }

    if (!track) {
        res.status(400).send("track is missing.");
    }

    const {name, duration_ms} = track;

    if (!name || !duration_ms) {
        res.status(400).send("body missing fields.")
    }

    //get the playlist from playlist id
    const playlist = await fetch_playlist_by_id(id);
    console.log(playlist);

    if (!playlist) {
        res.status(404).send("Playlist does not exist.");
    }

    const newTrack = await createTrack(track);


    const newPlaylistTrack = await create_playlist_track({playlist_id: playlist.id, track_id: track.id}); 
    res.status(201).send(newPlaylistTrack);
});


export default playlistsRouter;


