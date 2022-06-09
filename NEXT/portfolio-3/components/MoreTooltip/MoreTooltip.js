import Link from 'next/link';


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
                        <a href="translations" className="target">Translations</a>
                    </li>
                    <li>
                        <a href="photography" className="target">Photography</a>
                    </li>
                    {//<li>
                    //   <a href="/articles" className="target">Articles</a>
                    //</li>
                    }
                    <hr className="w-full"/>
                    <li>
                        <a href="/timeline" className="target">Timeline</a>
                    </li>
                    <li>
                        <a href="/about" className="target">About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MoreTooltip;