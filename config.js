//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const dev = process.env.NODE_ENV !== "production";

export const api = "http://localhost:3000";
export const server = dev ? "http://localhost:3000" : "https://www.kekesi.dev";

// dock elements
export const defaultDockElementIDs = [1, 2, 5, 9, 6];


// db credentials
export const user = "kristofkekesi";
export const password = "";
export const host = "localhost";
export const port = "5432";
export const database = "portfolio";


// metadata
export const defaultDescription = "";
export const defaultLanguage = "en";
export const defaultOpenGraphImage = server + "/opengarph.jpg";
export const defaultFavicon = server + "/favicon.png";


// months
export const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// fallbacks
export const imageFallback = "bg.jpeg";