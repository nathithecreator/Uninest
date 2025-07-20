import { Routes } from '@angular/router';
import { LandloadLandingPageComponent } from '../landload-landing-page/landload-landing-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardLandlordComponent } from '../dashboard-landlord/dashboard-landlord.component';
import { LandlordPropertiesComponent } from '../landlord-properties/landlord-properties.component';
import { LandlordPropertyDetailsComponent } from '../landlord-property-details/landlord-property-details.component';
import { StudentApplicationsTableComponent } from '../student-applications-table/student-applications-table.component';
import { AddPropertyComponent } from '../add-property/add-property.component';
import { StudentApplicationDetailsComponent } from '../student-application-details/student-application-details.component';
import { MaintenanceComponent } from '../maintenance/maintenance.component';
import { MaintenanceDetailsComponent } from '../maintenance-details/maintenance-details.component';
import { TenantsTableComponent } from '../tenants-table/tenants-table.component';
import { TenantDetailsComponent } from '../tenant-details/tenant-details.component';
import { ProfileComponent } from '../profile/profile.component';

export const routes: Routes = [
        { path: '', redirectTo: 'LandingPage', pathMatch: 'full' },
        { path: 'LandingPage', component: LandloadLandingPageComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'dashboardll', component: DashboardLandlordComponent },
         { path: 'propertiesll', component: LandlordPropertiesComponent },
          { path: 'propertydetailsll', component: LandlordPropertyDetailsComponent },
          { path: 'studentapplicationsll', component: StudentApplicationsTableComponent },
          { path: 'addpropertyll', component: AddPropertyComponent },
          { path: 'applicationdetails', component: StudentApplicationDetailsComponent },
          { path: 'maintenancetable', component: MaintenanceComponent },
          { path: 'maintenancedetails', component: MaintenanceDetailsComponent },
          { path: 'tenants', component: TenantsTableComponent },
          { path: 'tenant', component: TenantDetailsComponent },
          { path: 'profile', component: ProfileComponent }

];
