import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { SolutionsComponent } from "./components/solutions/solutions.component";
import { Dynamics365Component } from './components/dynamics365/dynamics365.component';
import { DynamicsGpComponent } from './components/dynamics-gp/dynamics-gp.component';
import { DynamicsAxComponent } from './components/dynamics-ax/dynamics-ax.component';
import { DynamicsCrmComponent } from './components/dynamics-crm/dynamics-crm.component';
import { DynamicsNavComponent } from './components/dynamics-nav/dynamics-nav.component';
import { AzureComponent } from './components/azure/azure.component';
import { Office365Component } from './components/office365/office365.component';
import { Dynamics365BusinessCentralComponent } from './components/dynamics365-business-central/dynamics365-business-central.component';
import { SharepointComponent } from './components/sharepoint/sharepoint.component';
import { QuickbooksComponent } from './components/quickbooks/quickbooks.component';
import { PeachtreeAccountingComponent } from './components/peachtree-accounting/peachtree-accounting.component';

@NgModule({
  declarations: [
    // SolutionsComponent,
    Dynamics365Component,
    DynamicsGpComponent,
    DynamicsAxComponent,
    DynamicsCrmComponent,
    DynamicsNavComponent,
    AzureComponent,
    Office365Component,
    Dynamics365BusinessCentralComponent,
    SharepointComponent,
    QuickbooksComponent,
    PeachtreeAccountingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {
      //   path: "",
      //   component: SolutionsComponent,
      //   children: [
      { path: 'dynamics-365', component: Dynamics365Component },
      { path: 'dynamics-gp', component: DynamicsGpComponent },
      { path: 'dynamics-ax', component: DynamicsAxComponent },
      { path: 'dynamics-crm', component: DynamicsCrmComponent },
      { path: 'dynamics-nav', component: DynamicsNavComponent },
      { path: 'azure', component: AzureComponent },
      { path: 'office-365', component: Office365Component },
      { path: 'business-central', component: Dynamics365BusinessCentralComponent },
      { path: 'sharepoint', component: SharepointComponent },
      { path: 'quickbooks', component: QuickbooksComponent },
      { path: 'peachtree-accounting', component: PeachtreeAccountingComponent }
      //   ]
      // }
    ])
  ]
})
export class SolutionsModule {}
