import db from "./client.js";

export async function create_playlist_track(track) {
    const { playlist_id, track_id } = track;

    //associate that track with a playlist
    const sql = `
        INSERT INTO playlists_tracks (playlist_id, track_id)
        VALUES ($1, $2)

    `;
    const response = await db.query(sql, [playlist_id, track_id]);
    return response.rows[0];
}