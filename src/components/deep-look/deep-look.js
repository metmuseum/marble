import OpenSeadragon from "OpenSeadragon";

export default function deepLookViewer() {
    const containerElement = document.querySelector(".js-deep-look__image");
    const imageURL = containerElement.dataset.image;
    const viewer = OpenSeadragon({
        id: "deep-look__image",
        prefixUrl: "openseadragon/images/",
        tileSources: {
            type: "image",
            url: imageURL,
        },
        gestureSettingsMouse: {
            clickToZoom: false,
            scrolltoZoom: false,
            pinchtoZoom: false,
        },
        visibilityRatio: 1,
        mouseNavEnabled: false,
        showNavigationControl: false,
        homeFillsViewer: true,
        minZoomLevel: 1,
        animationTime: 3,
    });

    // https://stackoverflow.com/questions/33738940/set-openseadragon-viewer-home-to-top-of-image
    // var oldBounds = viewer.viewport.getBounds(); 
    // var newBounds = new OpenSeadragon.Rect(0, 0, 1, oldBounds.height / oldBounds.width); 
    // viewer.viewport.fitBounds(newBounds, true);

    let essayEntries = document.querySelectorAll('.js-deep-look-zoom');
    let essayIntro = document.querySelector('.js-deep-look-intro');

    let config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    let observer = new IntersectionObserver(onChange, config);
    essayEntries.forEach(entry => observer.observe(entry));
    function onChange(chunks, observer) {
        chunks.forEach(chunk => {
            if (chunk.intersectionRatio > 0) {
                goToPoint(chunk.target);
            }
        });
    }

    function goToPoint(entry) {
        var coordinates = {};
        coordinates.x = parseFloat(entry.dataset.x);
        coordinates.y = parseFloat(entry.dataset.y);
        var zoomlevel = parseFloat(entry.dataset.z);

        viewer.viewport.panTo(coordinates);
        viewer.viewport.zoomTo(zoomlevel);
    }
}