import getArticles from "../../functions/api/articles";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const articles = async (req, res) => {
    const {
        query: { id, name, redirect, isVisible, content, skill, tool, sitemapChangeFrequency, sitemapPriority },
        method,
    } = req;
    
	const articles = await getArticles(id, name, redirect, isVisible, content, skill, tool, sitemapChangeFrequency, sitemapPriority);

	if (articles == "No results found") {
		return res.status(404).send(articles);
	} else {
		return res.status(200).json(articles);
	}
};

export default articles;