import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [AppComponent, TestComponent, Test2Component],
  imports: [
    BrowserModule,

    CoreModule,
    RouterModule.forRoot(
      [
        {
          path: 'services',
          loadChildren: './services-section/services-section.module#ServicesSectionModule'
        },
        {
          path: 'industries',
          loadChildren: './industries/industries.module#IndustriesModule'
        },
        {
          path: 'solutions',
          loadChildren: './solutions/solutions.module#SolutionsModule'
        },
        {
          path: 'about-us',
          loadChildren: './about-us/about-us.module#AboutUsModule'
        },
        { path: 'test', component: TestComponent },
        { path: 'test2', component: Test2Component }
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 100] // [x, y]
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
