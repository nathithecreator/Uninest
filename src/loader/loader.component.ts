import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() fullScreen: boolean = true;
  @Input() imageUrl: string = '../loader/images/houseflat.gif';
}