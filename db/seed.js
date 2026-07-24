import db from "#db/client";
import { createTrack } from "./tracks.js";
import { createPlaylist } from "./playlists.js";
import { create_playlist_track } from "./playlists_tracks.js"

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const track_1 = await createTrack({name: "track 1", duration_ms: 550});
  const track_2 = await createTrack({name: "track 2", duration_ms: 1000});
  const track_3 = await createTrack({name: "track 3", duration_ms: 300});
  const track_4 = await createTrack({name: "track 4", duration_ms: 6000});
  const track_5 = await createTrack({name: "track 5", duration_ms: 300});
  const track_6 = await createTrack({name: "track 6", duration_ms: 100});
  const track_7 = await createTrack({name: "track 7", duration_ms: 300});
  const track_8 = await createTrack({name: "track 8", duration_ms: 200});
  const track_9 = await createTrack({name: "track 9", duration_ms: 770});
  const track_10 = await createTrack({name: "track 10", duration_ms: 800});

  const track_11 = await createTrack({name: "track 11", duration_ms: 600});
  const track_12 = await createTrack({name: "track 12", duration_ms: 5404});
  const track_13 = await createTrack({name: "track 13", duration_ms: 2342});
  const track_14 = await createTrack({name: "track 14", duration_ms: 4565});
  const track_15 = await createTrack({name: "track 15", duration_ms: 7866});
  const track_16 = await createTrack({name: "track 16", duration_ms: 4521});
  const track_17 = await createTrack({name: "track 17", duration_ms: 1145});
  const track_18 = await createTrack({name: "track 18", duration_ms: 2443});
  const track_19 = await createTrack({name: "track 19", duration_ms: 3266});
  const track_20 = await createTrack({name: "track 20", duration_ms: 6799});

  const playlist_1 = await createPlaylist({name: "playlist 1", description: "desc 1"});
  const playlist_2 = await createPlaylist({name: "playlist 2", description: "desc 2"});
  const playlist_3 = await createPlaylist({name: "playlist 3", description: "desc 3"});
  const playlist_4 = await createPlaylist({name: "playlist 4", description: "desc 4"});
  const playlist_5 = await createPlaylist({name: "playlist 5", description: "desc 5"});
  const playlist_6 = await createPlaylist({name: "playlist 6", description: "desc 6"});
  const playlist_7 = await createPlaylist({name: "playlist 7", description: "desc 7"});
  const playlist_8 = await createPlaylist({name: "playlist 8", description: "desc 8"});
  const playlist_9 = await createPlaylist({name: "playlist 9", description: "desc 9"});
  const playlist_10 = await createPlaylist({name: "playlist 10", description: "desc 10"});
  console.log(playlist_6);

  const playlist_track_1 = await create_playlist_track({playlist_id: playlist_2.id, track_id: track_10.id});
  const playlist_track_2 = await create_playlist_track({playlist_id: playlist_3.id, track_id: track_11.id});
  const playlist_track_3 = await create_playlist_track({playlist_id: playlist_1.id, track_id: track_5.id});
  const playlist_track_4 = await create_playlist_track({playlist_id: playlist_5.id, track_id: track_12.id});
  const playlist_track_5 = await create_playlist_track({playlist_id: playlist_8.id, track_id: track_15.id});
  const playlist_track_6 = await create_playlist_track({playlist_id: playlist_1.id, track_id: track_3.id});
  const playlist_track_7 = await create_playlist_track({playlist_id: playlist_6.id, track_id: track_8.id});
  const playlist_track_8 = await create_playlist_track({playlist_id: playlist_9.id, track_id: track_12.id});
  const playlist_track_9 = await create_playlist_track({playlist_id: playlist_1.id, track_id: track_13.id});
  const playlist_track_11 = await create_playlist_track({playlist_id: playlist_10.id, track_id: track_10.id});
  const playlist_track_12 = await create_playlist_track({playlist_id: playlist_5.id, track_id: track_5.id});
  const playlist_track_13 = await create_playlist_track({playlist_id: playlist_8.id, track_id: track_12.id});
  const playlist_track_14 = await create_playlist_track({playlist_id: playlist_7.id, track_id: track_7.id});
  const playlist_track_15 = await create_playlist_track({playlist_id: playlist_6.id, track_id: track_7.id});
  }