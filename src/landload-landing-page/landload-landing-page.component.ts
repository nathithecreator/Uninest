import { Component } from '@angular/core';
import { NavLandlordComponent } from "../nav-landlord/nav-landlord.component";
import { LandlordBodyComponent } from "../landlord-body/landlord-body.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-landload-landing-page',
  imports: [NavLandlordComponent,LandlordBodyComponent,FooterComponent],
  templateUrl: './landload-landing-page.component.html',
  styleUrl: './landload-landing-page.component.css'
})
export class LandloadLandingPageComponent {

}
