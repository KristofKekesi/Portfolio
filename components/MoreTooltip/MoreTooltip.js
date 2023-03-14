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
                        <Link href="/translations" className="target">
                            Translations
                        </Link>
                    </li>
                    <li>
                        <Link href="/photography" className="target">
                            Photography
                        </Link>
                    </li>
                    {//<li>
                    //   <a href="/articles" className="target">Articles</a>
                    //</li>
                    }
                    <hr className="w-full"/>
                    <li>
                        <Link href="/projects" className="target">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/timeline" className="target">
                            Timeline
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="target">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MoreTooltip;