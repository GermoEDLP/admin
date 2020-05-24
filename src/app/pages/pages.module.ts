import { NgModule } from '@angular/core';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
  declarations: [
    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PAGES_ROUTES
  ],
  exports: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent
  ]
})
export class PagesModule { }
