import { async, TestBed } from '@angular/core/testing';
import { NewCarouselComponent } from './new-carousel.component';
describe('NewCarouselComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewCarouselComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/gq-work/Development/Web/mean-app/src/app/new-carousel/new-carousel.component.spec.js.map