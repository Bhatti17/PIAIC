"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artist1", "Title 1");
const album2 = make_album("Artist2", "Title 2", 12);
const album3 = make_album("Artist3", "Title 3", 15);
console.log("🚀 ~ file: Assignment-39.ts:29 ~ album1:", album1);
console.log("🚀 ~ file: Assignment-39.ts:31 ~ album2:", album2);
console.log("🚀 ~ file: Assignment-39.ts:33 ~ album3:", album3);
