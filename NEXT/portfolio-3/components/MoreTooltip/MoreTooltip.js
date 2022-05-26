import Link from 'next/link';


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function MoreTooltip() {
    return (
        <div id="more-tooltip" className="blur-dark hidden fixed right-3 rounded-2xl">
            <ul>
                <li>
                    <Link className="target" href="/translations">Translations</Link>
                </li>
                <li>
                    <Link className="target" href="/photography">Photography</Link>
                </li>
                {//<li>
                 //   <Link className="target" href="/articles">Articles</Link>
                //</li>
                }
                <hr className="w-full"/>
                <li>
                    <Link className="target" href="/timeline">Timeline</Link>
                </li>
                <li>
                    <Link className="target" href="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default MoreTooltip;