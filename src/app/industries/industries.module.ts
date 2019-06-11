import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BankingComponent } from './components/banking/banking.component';
import { ChemicalComponent } from './components/chemical/chemical.component';
import { ConsumerGoodsComponent } from './components/consumer-goods/consumer-goods.component';
import { EducationComponent } from './components/education/education.component';
import { EnergyUtilitiesComponent } from './components/energy-utilities/energy-utilities.component';
// import { IndustriesComponent } from "./components/industries/industries.component";
import { InsuranceComponent } from './components/insurance/insurance.component';
import { LogisticsTransportationComponent } from './components/logistics-transportation/logistics-transportation.component';
import { PharmaceuticalComponent } from './components/pharmaceutical/pharmaceutical.component';
import { PublicSectorComponent } from './components/public-sector/public-sector.component';
import { RetailComponent } from './components/retail/retail.component';
import { TelecomComponent } from './components/telecom/telecom.component';
import { TextileApparelComponent } from './components/textile-apparel/textile-apparel.component';

@NgModule({
  declarations: [
    EducationComponent,
    RetailComponent,
    TelecomComponent,
    ChemicalComponent,
    // IndustriesComponent,
    PublicSectorComponent,
    ConsumerGoodsComponent,
    TextileApparelComponent,
    PharmaceuticalComponent,
    BankingComponent,
    InsuranceComponent,
    EnergyUtilitiesComponent,
    LogisticsTransportationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {
      //   path: "",
      //   component: IndustriesComponent,
      //   children: [
      { path: 'retail', component: RetailComponent },
      { path: 'education', component: EducationComponent },
      { path: 'chemical', component: ChemicalComponent },
      { path: 'telecom', component: TelecomComponent },
      { path: 'public-sector', component: PublicSectorComponent },
      { path: 'consumer-goods', component: ConsumerGoodsComponent },
      { path: 'textile-&-apparel', component: TextileApparelComponent },
      { path: 'pharmaceutical', component: PharmaceuticalComponent },
      { path: 'banking', component: BankingComponent },
      { path: 'insurance', component: InsuranceComponent },
      { path: 'energy-&-utilities', component: EnergyUtilitiesComponent },
      { path: 'logistics-&-transportation', component: LogisticsTransportationComponent }
      //   ]
      // }
    ])
  ]
})
export class IndustriesModule {}
