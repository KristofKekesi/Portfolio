import getTimeline from "../../functions/api/timeline";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const timeline = async (req, res) => {
	const {
        query: { id },
        method,
    } = req;
	
	const timeline = await getTimeline(id);

	if (timeline == "No results found") {
		return res.status(404).send(timeline);
	} else {
		return res.status(200).json(timeline);
	}
};

export default timeline;