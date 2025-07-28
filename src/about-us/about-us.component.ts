import { Component } from '@angular/core';
import { NavLandlordComponent } from "../nav-landlord/nav-landlord.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-us',
  imports: [NavLandlordComponent,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
