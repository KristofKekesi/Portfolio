import getBundles from "../../functions/api/bundles";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const bundles = async (req, res) => {
	const {
        query: { id, name, app },
        method,
    } = req;
	const bundles = await getBundles(id, name, app);

	if (bundles == "No results found") {
		return res.status(404).send(bundles);
	} else {
		return res.status(200).json(bundles);
	}
}

export default bundles;