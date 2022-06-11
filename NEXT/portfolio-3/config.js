import { Pool } from "pg";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://www.kekesi.dev';


// db connection
const user = "kristofkekesi";
const password = "";
const host = "localhost";
const port = "5432";
const database = "portfolio";

let conn;

if (!conn) {
	conn = new Pool({
		user: user,
		password: password,
		host: host,
		port: port,
		database: database,
	});
}

export default conn;