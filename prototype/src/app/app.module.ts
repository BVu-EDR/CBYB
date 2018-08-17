import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { IntermediaryComponent } from './pages/intermediary/intermediary.component';
import { DetailsComponent } from './pages/details/details.component';
import { FullreportComponent } from './pages/fullreport/fullreport.component';
import { TabsComponent } from './tabs/tabs.component';
import { AddressFormComponent } from './address-form/address-form.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseComponent } from './collapse/collapse.component';
import { MapComponent } from './map/map.component';
import { PlanningZoningComponent } from './layers/planning-zoning/planning-zoning.component';
import { PropertyBoundariesComponent } from './layers/property-boundaries/property-boundaries.component';
import { FloodZoneComponent } from './layers/flood-zone/flood-zone.component';
import { WetlandsComponent } from './layers/wetlands/wetlands.component';
import { SoilComponent } from './layers/soil/soil.component';
import { UtilitiesComponent } from './layers/utilities/utilities.component';
import { LandOfImportanceComponent } from './layers/land-of-importance/land-of-importance.component';
import { OtherComponent } from './layers/other/other.component';

// import { MatTabsModule, 
//   MatCardModule, 
//   MatButtonModule, 
//   MatFormFieldModule, 
//   MatSelectModule, 
//   MatOptionModule, 
//   MatInputModule,
//   MatExpansionModule } from '@angular/material';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntermediaryComponent,
    TabsComponent,
    AddressFormComponent,
    DetailsComponent,
    FullreportComponent,
    CollapseComponent,
    MapComponent,
    PropertyBoundariesComponent,
    PlanningZoningComponent,
    FloodZoneComponent,
    WetlandsComponent,
    SoilComponent,
    UtilitiesComponent,
    LandOfImportanceComponent,
    OtherComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    LeafletModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatTabsModule,
    // MatIconModule,
    // MatCardModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatOptionModule,
    // MatInputModule,
    // MatExpansionModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
