import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BusinessIntelligenceComponent } from './components/business-intelligence/business-intelligence.component';
import { BusinessSolutionComponent } from './components/business-solution/business-solution.component';
import { CustomizationDevelopmentComponent } from './components/customization-development/customization-development.component';
import { InfrastructureManagmentComponent } from './components/infrastructure-managment/infrastructure-managment.component';
import { InfrastructureMainComponent } from './components/infrastructure-managment/infrastructure-main/infrastructure-main.component';
import { ComputeComponent } from './components/infrastructure-managment/compute/compute.component';
import { StorageComponent } from './components/infrastructure-managment/storage/storage.component';
import { InfrastructureComponent } from './components/infrastructure-managment/infrastructure/infrastructure.component';

@NgModule({
  declarations: [
    BusinessSolutionComponent,
    InfrastructureManagmentComponent,
    BusinessIntelligenceComponent,
    CustomizationDevelopmentComponent,
    InfrastructureMainComponent,
    ComputeComponent,
    StorageComponent,
    InfrastructureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'business-solution', component: BusinessSolutionComponent },
      {
        path: 'infrastructure-&-endpoint',
        component: InfrastructureManagmentComponent,
        children: [
          { path: '', component: InfrastructureComponent },
          { path: 'infrastructure', component: InfrastructureMainComponent },
          { path: 'compute', component: ComputeComponent },
          { path: 'storage', component: StorageComponent }
        ]
      },
      { path: 'business-intelligence', component: BusinessIntelligenceComponent },
      { path: 'customization-&-dev', component: CustomizationDevelopmentComponent }
    ])
  ]
})
export class ServicesSectionModule {}
