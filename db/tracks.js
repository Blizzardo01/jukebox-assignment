import db from "./client.js";


export async function fetch_all_tracks() {
    const sql = `
    SELECT * FROM tracks
    `;
    const response = await db.query(sql);
    return response.rows;
}


export async function createTrack(track) {
    const {name, duration_ms} = track;
    const sql = `
    INSERT INTO tracks(name, duration_ms) 
    VALUES ($1, $2)


    RETURNING *;
    `
    const response = await db.query(sql, [name, duration_ms]);
    return response.rows[0];
}


export async function fetch_track_by_id(id) {
    const sql = `
    SELECT * FROM tracks
    WHERE id = $1;
    `;
    const response = await db.query(sql, [id]);
    return response.rows[0];
}