import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  hoteles = [
    { ubi: 'Ciudad A', nombre: 'Hotel A', precio: 75, nota: 4.2, srcImagen: 'https://cdn2.paraty.es/ona-corporativa/images/ad2bf0dcce93250_v6.jpeg=s450-c' },
    { ubi: 'Ciudad B', nombre: 'Hotel B', precio: 150, nota: 4.8, srcImagen: 'https://cdn2.paraty.es/ona-corporativa/images/f28ef81318009d7_v6.jpeg=s450-c' },
    { ubi: 'Ciudad C', nombre: 'Hotel c', precio: 90, nota: 4.3, srcImagen: 'https://cdn2.paraty.es/ona-corporativa/images/f1c389a5f749b28=s450-c' },
    { ubi: 'Ciudad D', nombre: 'Hotel D', precio: 94, nota: 4.4, srcImagen: 'https://cdn2.paraty.es/ona-corporativa/images/5531c88ad7c888e_v6.jpeg=s450-c' },
   ];


  constructor(

    ) { }
     
 }