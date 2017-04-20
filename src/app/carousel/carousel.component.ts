import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent  {
  PICS: Pic[] = [
    {title: 'Bringing OLB to Everyone...', url: '../../assets/boy.jpg'},
    {title: 'We are always open...' , url: '../../assets/girl.jpg'},
    {title: 'For When you are on the go', url: '../../assets/homescreen.png'},
    {title: 'Responsible', url: '../../assets/life.jpg'}
  ];

}
export class Pic {
  title: string;
  url: string;
}

