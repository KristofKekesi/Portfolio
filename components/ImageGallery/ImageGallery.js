//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function ImageGallery(props) {
    if (props.images == undefined || props.images.length == 0) {
        return null;
    }

    const content = [];
    for (let i = 0; i < props.images.length; i++) {
        content.push(
            <div style={{ flex: props.images[i].width / props.images[i].height }} key={i}><img src={props.images[i].url} alt={props.images[i].name} /></div>
        );
    }

    return (
        <center id={"gallery-" + props.dataKey} className={"gallery overflow-hidden flex gap-3 " + props.galleryTag}>{content}</center>
    );
};