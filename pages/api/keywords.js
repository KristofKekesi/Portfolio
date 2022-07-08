import getKeywords from "../../functions/api/keywords";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const keywords = async (req, res) => {
	const {
        method,
    } = req;

	const keywords = await getKeywords();
    return res.status(200).json(keywords);
};

export default keywords;