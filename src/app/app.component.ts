import { Component } from '@angular/core';
import { NavLandlordComponent } from "../nav-landlord/nav-landlord.component";
import { LandloadLandingPageComponent } from "../landload-landing-page/landload-landing-page.component";
import { LandlordBodyComponent } from "../landlord-body/landlord-body.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavLandlordComponent, LandloadLandingPageComponent, LandlordBodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Uninest';
}
