import { useRouter } from "next/router";

import "../api/articles";

export default function Article({ props }) {
    const router = useRouter();
    const path = router.query;
    console.log(path.article);

    return(<><a>{path.article}</a></>)


}

export async function getServerSideProps() {
    return {
        props: { articles: ["a", "b"] }
    }
}