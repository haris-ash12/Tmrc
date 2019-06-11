import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  slider = ['one', 'two', 'three'];
  slideNumber = this.slider[0];

  ngAfterViewInit() {
    let count = 0;
    setInterval(() => {
      count += 1;
      if (count == this.slider.length) count = 0;
      this.slideNumber = this.slider[count];
    }, 4000);
  }

  imageUrlArray = [
    '../../assets/slider-images/s-img1.jpg',
    '../../assets/slider-images/s-img1-text.jpg',
    '../../assets/slider-images/s-img1.jpg'
  ];

  arrowSize: string = '10px';
  showArrows: boolean = true;

  showDots: boolean = true;
  dotColor: string = '#FFF';

  autoPlay: boolean = true;
  autoPlayInterval: number = 5000;
}
