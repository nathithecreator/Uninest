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
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';
import { MessageComponent } from '../message/message.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { EditPropertyComponent } from '../edit-property/edit-property.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FaqComponent } from '../faq/faq.component';
import { LoaderComponent } from '../loader/loader.component';

export const routes: Routes = [
        { path: '', redirectTo: 'LandingPage', pathMatch: 'full' },
        { path: 'LandingPage', component: LandloadLandingPageComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'dashboardll', component: DashboardLandlordComponent },
         { path: 'propertiesll', component: LandlordPropertiesComponent },
          { path: 'propertydetailsll/:id', component: LandlordPropertyDetailsComponent },
          { path: 'studentapplicationsll', component: StudentApplicationsTableComponent },
          { path: 'addpropertyll', component: AddPropertyComponent },
          { path: 'editproperty/:id', component: EditPropertyComponent },
          { path: 'application', component: StudentApplicationDetailsComponent },
          { path: 'maintenancetable', component: MaintenanceComponent },
          { path: 'maintenance', component: MaintenanceDetailsComponent },
          { path: 'tenants', component: TenantsTableComponent },
          { path: 'tenant', component: TenantDetailsComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'profileedit', component: ProfileEditComponent },
          { path: 'message', component: MessageComponent },
          { path: 'notifications', component: NotificationsComponent },
          { path: 'aboutus', component: AboutUsComponent },
          { path: 'contactus', component: ContactUsComponent },
          { path: 'faq', component: FaqComponent },
          { path: 'loader', component: LoaderComponent }


];
