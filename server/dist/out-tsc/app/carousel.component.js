// Compoent Decorator
var IMAGES = [
    { 'title': 'boy', 'url': 'assets/boy.jpg' },
    { 'title': 'girl', 'url': 'assets/girl.jpg' },
    { 'title': 'boy2', 'url': 'assets/homescreen.jpg' },
    { 'title': 'life', 'url': 'assets/life.jpg' },
];
// Carousel Component itself
export var CSSCarouselComponent = (function () {
    function CSSCarouselComponent() {
        // images data to be bound to the template
        this.images = IMAGES;
    }
    return CSSCarouselComponent;
}());
export var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    return CarouselComponent;
}());
//# sourceMappingURL=/Users/gq-work/Development/Web/mean-app/src/app/carousel.component.js.map