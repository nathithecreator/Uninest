import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavLandlordComponent } from '../nav-landlord/nav-landlord.component';

@Component({
  selector: 'app-faq',
  imports: [NavLandlordComponent,FooterComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
