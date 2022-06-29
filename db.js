import { Pool } from "pg";

import {user, password, host, port, database} from './config';

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