import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ErpPakistanComponent } from './components/erp-pakistan/erp-pakistan.component';
import { DynamicsDemoRequestComponent } from './components/dynamics-demo-request/dynamics-demo-request.component';
// import { AboutUsComponent } from "./components/about-us/about-us.component";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactComponent,
    CompanyProfileComponent,
    ErpPakistanComponent,
    DynamicsDemoRequestComponent
    // AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {
      //   path: "",
      //   component: AboutUsComponent,
      //   children: [
      { path: 'contact', component: ContactComponent },
      { path: 'company-profile', component: CompanyProfileComponent },
      { path: 'erp-pakistan', component: ErpPakistanComponent },
      { path: 'dynamics-demo-request', component: DynamicsDemoRequestComponent }
      //   ]
      // }
    ])
  ]
})
export class AboutUsModule {}
