//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://www.kekesi.dev';


// dock elements
export const dockElementIDs = [1, 2, 5, 9, 6];


// db credentials
export const user = "kristofkekesi";
export const password = "";
export const host = "localhost";
export const port = "5432";
export const database = "portfolio";