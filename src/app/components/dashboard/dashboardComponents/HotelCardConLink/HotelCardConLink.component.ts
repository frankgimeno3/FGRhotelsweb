import { Component, Input } from '@angular/core';

@Component({
  selector: 'HotelCardConLink',
  templateUrl: './HotelCardConLink.component.html',
  styleUrls: ['./HotelCardConLink.component.css']
   
})
export class HotelCardConLink {
  @Input() ubi?: string;
  @Input() nombre?: string;
  @Input() precio?: number;
  @Input() nota?: number;
  @Input() srcImagen?: string;
}