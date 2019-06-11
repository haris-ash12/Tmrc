import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowModule } from 'ng-simple-slideshow';

import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { CustomSliderComponent } from './components/home/custom-slider/custom-slider.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CustomSliderComponent,
    FloatingButtonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SlideshowModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ],
  exports: [NavbarComponent, FloatingButtonComponent, FooterComponent]
})
export class CoreModule {}

// exported customslidercompontnt because of testing it in the test component.
