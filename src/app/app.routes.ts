import { Routes } from '@angular/router';
import { LandloadLandingPageComponent } from '../landload-landing-page/landload-landing-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardLandlordComponent } from '../dashboard-landlord/dashboard-landlord.component';

export const routes: Routes = [
        { path: '', redirectTo: 'LandingPage', pathMatch: 'full' },
        { path: 'LandingPage', component: LandloadLandingPageComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'dashboardll', component: DashboardLandlordComponent }
];
