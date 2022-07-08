import getTool from "../../functions/api/tool";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const tool = async (req, res) => {
	const {
        query: { id },
        method,
    } = req;

	const tool = await getTool(id);

	if (tool == "No results found") {
		return res.status(404).send(tool);
	} else if (tool == "No query parameters provided") {
		return res.status(500).send(tool);
	} else {
		return res.status(200).json(tool);
	}
};

export default tool;