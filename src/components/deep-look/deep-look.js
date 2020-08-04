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

    let homeZoom = viewer.viewport.getHomeZoom();
    document.querySelector('.js-deep-look-home').setAttribute('data-z', homeZoom);
    document.querySelector('.js-deep-look-home').setAttribute('data-x', '0.5');
    document.querySelector('.js-deep-look-home').setAttribute('data-y', '0.7');

    let essayEntries = document.querySelectorAll('.js-deep-look-zoom');

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