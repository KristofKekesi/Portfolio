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
    const {
        query: { id, platform, skill, tool },
        method,
    } = req;
    console.log(id);

    if (id == undefined && platform == undefined && skill == undefined && tool == undefined) {
        return res.status(400).json("No query parameters provided");
    }

	try {
		const mainQuery = 'SELECT * FROM projects WHERE id =' + id;
		const mainResult = await conn.query(mainQuery);

		for (let i = 0; i < mainResult.rows.length; i++) {
            mainResult.rows[i].bundleIDs = [];
            mainResult.rows[i].downloads = [];
            mainResult.rows[i].screenshotImageIDs = [];
			mainResult.rows[i].skillIDs = [];
			mainResult.rows[i].toolIDs  = [];

            // Bundles
			const bundlesSideQuery = "SELECT * FROM project_bundles WHERE \"projectID\" = " + mainResult.rows[i].id;
			const bundlesSideResult = await conn.query(bundlesSideQuery);
			for (let j = 0; j < bundlesSideResult.rows.length; j++) {
				mainResult.rows[i].bundleIDs.push(bundlesSideResult.rows[j].bundleID);
			}

            // Downloads
			const downloadsSideQuery = "SELECT * FROM project_downloads WHERE \"projectID\" = " + mainResult.rows[i].id;
			const downloadsSideResult = await conn.query(downloadsSideQuery);
			for (let j = 0; j < downloadsSideResult.rows.length; j++) {
                delete downloadsSideResult.rows[j].projectID;
				mainResult.rows[i].downloads.push(downloadsSideResult.rows[j]);
			}

            // Screenshots
			const screenshotsSideQuery = "SELECT * FROM project_screenshots WHERE \"projectID\" = " + mainResult.rows[i].id;
			const screenshotsSideResult = await conn.query(screenshotsSideQuery);
			for (let j = 0; j < screenshotsSideResult.rows.length; j++) {
                delete screenshotsSideResult.rows[j].projectID;
				mainResult.rows[i].screenshotImageIDs.push(screenshotsSideResult.rows[j].imageID);
			}

			// Skills
			const skillsSideQuery = "SELECT * FROM project_skills WHERE \"projectID\" = " + mainResult.rows[i].id;
			const skillsSideResult = await conn.query(skillsSideQuery);
			for (let j = 0; j < skillsSideResult.rows.length; j++) {
				mainResult.rows[i].skillIDs.push(skillsSideResult.rows[j].skillID);
			}

			// Tools
			const toolsSideQuery = "SELECT * FROM project_tools WHERE \"projectID\" = " + mainResult.rows[i].id;
			const toolsSideResult = await conn.query(toolsSideQuery);
			for (let j = 0; j < toolsSideResult.rows.length; j++) {
				mainResult.rows[i].toolIDs.push(toolsSideResult.rows[j].toolID);
			}

			if (i === mainResult.rows.length - 1) {
				return res.status(200).json(mainResult.rows[0]);
			}
		}
        return res.status(404).json("No results found");

	} catch ( error ) {
        console.log(error);
	}
};