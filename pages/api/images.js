import getImages from "../../functions/api/images";
import bundles from "./bundles";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const images = async (req, res) => {
	const {
        query: { id, type, copyright },
        method,
    } = req;
	
	const images = await getImages(id, type, copyright);

	if (images == "No results found") {
		return res.status(404).send(images);
	} else if (images == "No query parameters provided") {
		return res.status(500).send(images);
	} else {
		return res.status(200).json(images);
	}
};

export default images;