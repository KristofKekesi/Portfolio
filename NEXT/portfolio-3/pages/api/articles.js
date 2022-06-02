import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: "kristofkekesi",
    password: "",
    host: "localhost",
    port: 5432,
    database: "portfolio",
  });
}

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
        const query = 'SELECT * FROM articles';
      const result = await conn.query(
          query
      );
      console.log( "ttt",result );
      return res.status(200).json(result.rows);
  } catch ( error ) {
      console.log( error );
  }
};