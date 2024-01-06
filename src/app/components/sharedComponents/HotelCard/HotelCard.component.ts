import { Component, Input } from '@angular/core';

@Component({
  selector: 'HotelCard',
  templateUrl: './HotelCard.component.html',
  styleUrls: ['./HotelCard.component.css']
   
})
export class HotelCardComponent {
  @Input() ubi?: string;
  @Input() nombre?: string;
  @Input() precio?: number;
  @Input() nota?: number;
  @Input() srcImagen?: string;
}