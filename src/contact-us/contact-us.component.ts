import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavLandlordComponent } from '../nav-landlord/nav-landlord.component';

@Component({
  selector: 'app-contact-us',
  imports: [NavLandlordComponent,FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
