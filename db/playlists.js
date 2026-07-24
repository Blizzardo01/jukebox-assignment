import db from "./client.js";

export async function createPlaylist(playlist) {
const {name, description} = playlist;

const sql = `
INSERT INTO playlists (name, description)
    VALUES ($1, $2)

RETURNING *;
`
const response = await db.query(sql, [name, description]);
return response.rows[0];
}


export async function fetch_all_playlists() {
    const sql = `
    SELECT * FROM playlists
    `;
    const response = await db.query(sql);
    return response.rows;
}


export async function fetch_playlist_by_id(id) {
    const sql = `
    SELECT * FROM playlists
    WHERE id = $1;
    `;
    const response = await db.query(sql, [id]);
    return response.rows[0];

}


export async function fetch_tracks_by_playlist_id(id) {
    const sql = `
    SELECT tracks.*
    FROM playlists_tracks
        JOIN playlists ON playlists_tracks.playlist_id = playlists.id
        JOIN tracks ON playlists_tracks.track_id = tracks.id
    WHERE playlists_tracks.playlist_id = $1;
    `;
    const response = await db.query(sql, [id]);
    return response.rows;

}


export async function add_new_playlist(playlist) {
    const { name, description } = playlist;
    const sql = `
    INSERT INTO playlists (name, description)
        VALUES ($1, $2)
    RETURNING *;
    `;
    const response = await db.query(sql, [name, description]);
    return response.rows[0];
} 

