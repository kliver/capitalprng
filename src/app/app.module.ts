import 'chart.js/dist/Chart.min.js';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChartModule} from 'primeng/chart';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {DashboardHelpComponent} from './dashboard-help/dashboard-help.component';
import {DashboardUploadComponent} from './dashboard-upload/dashboard-upload.component';
import {FileUploadModule} from 'primeng/fileupload';
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: DashboardHomeComponent},
      {path: 'help', component: DashboardHelpComponent},
      {path: 'upload', component: DashboardUploadComponent}
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    DashboardHomeComponent,
    DashboardHelpComponent,
    DashboardUploadComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    MenubarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FileUploadModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
