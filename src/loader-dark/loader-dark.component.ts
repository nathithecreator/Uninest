import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-dark',
  imports: [],
  templateUrl: './loader-dark.component.html',
  styleUrl: './loader-dark.component.css'
})
export class LoaderDarkComponent {
  @Input() fullScreen: boolean = true;
}
