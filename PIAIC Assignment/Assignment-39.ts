/* Album: Write a function called make_album() that builds
 a Object describing a music album. The function should take 
 in an artist name and an album title, and it should return a 
 Object containing these two pieces of information. Use the
  function to make three dictionaries representing different albums.
   Print each return value to show that Objects are storing the album
    information correctly. Add an optional parameter to make_album() 
    that allows you to store the number of tracks on an album. If the
     calling line includes a value for the number of tracks, add that
      value to the album’s Object. Make at least one new function call 
      that includes the number of tracks on an album. */
    //   Solution:
interface Ablum{
  artist: string;
  title : string;
  tracks?: number;
}
function make_album(artist:string, title:string, tracks?: number): Ablum {
let album :Ablum = {
  artist,
  title,
};
if (tracks !== undefined) {
  album.tracks = tracks;
}  
return album
}
const album1 = make_album("Artist1", "Title 1" );
const album2 = make_album("Artist2", "Title 2", 12 );
const album3 = make_album("Artist3", "Title 3",15 );

console.log("🚀 ~ file: Assignment-39.ts:29 ~ album1:", album1);
console.log("🚀 ~ file: Assignment-39.ts:31 ~ album2:", album2);
console.log("🚀 ~ file: Assignment-39.ts:33 ~ album3:", album3);