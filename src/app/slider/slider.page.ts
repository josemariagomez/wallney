import { Component , ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})

export class SliderPage {
  constructor(private storage: Storage, private router: Router) { }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<img style="width: 1.2rem; height:1.2rem;" src="../../assets/img/dot.png" class="' + className + '">';
      },
    }
  };

  @ViewChild(IonSlides, {static: true}) slides: IonSlides;


  ngOnInit() {
  }

  async finish() {
    await this.storage.set('tutorialComplete', true);
    this.router.navigateByUrl('/');
  }

  next() {
    this.slides.slideNext()
  }
}
