import { server } from "../config";
import Article from "../components/Article/Article";

export const getStaticPaths = async () => {
	const response = await fetch(server + "/api/articles");
	const articles = await response.json();
	console.log(articles);

	const paths = [];
	for (let i = 0; i < articles.length; i++) {
		paths.push(articles[i].redirect || articles[i].id);
	}
	console.log(paths);

	return {
		paths: [],
		fallback: "blocking", 
	}
}

export default function ArticlePage({ props }) {
	console.log(props.content)
	return (
	<main>
		<Article url={server + "/" + props.content}/>
		from {server + "/" + props.content}<br />
		{props.name}
	</main>
	);
}

export const getStaticProps = async ( params ) => {
	const response = await fetch(server + "/api/articles?redirect=" + params.params.article);
	const article = await response.json();
	console.log(article);
	console.log(params);

	return {
		props: { props: article[0] },
	};
};