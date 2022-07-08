import Link from "next/link";

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function MoreTooltip() {
    return (
        <div className="hidden md:block">
            <div id="more-tooltip" className="blur-dark fixed right-3 hidden rounded-2xl z-10">
                <ul>
                    <li>
                        <Link href="/translations">
                            <a className="target">Translations</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/photography">
                            <a className="target">Photography</a>
                        </Link>
                    </li>
                    {//<li>
                    //   <a href="/articles" className="target">Articles</a>
                    //</li>
                    }
                    <hr className="w-full"/>
                    <li>
                        <Link href="/timeline">
                            <a className="target">Timeline</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="target">About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MoreTooltip;