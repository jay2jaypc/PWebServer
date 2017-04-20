var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var CarouselComponent = (function () {
    function CarouselComponent() {
        this.PICS = [
            { title: 'Bringing OLB to Everyone...', url: '../../assets/boy.jpg' },
            { title: 'We are always open...', url: '../../assets/girl.jpg' },
            { title: 'For When you are on the go', url: '../../assets/homescreen.png' },
            { title: 'Responsible', url: '../../assets/life.jpg' }
        ];
    }
    CarouselComponent = __decorate([
        Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
export var Pic = (function () {
    function Pic() {
    }
    return Pic;
}());
//# sourceMappingURL=/Users/gq-work/Development/Web/mean-app/src/app/carousel/carousel.component.js.map