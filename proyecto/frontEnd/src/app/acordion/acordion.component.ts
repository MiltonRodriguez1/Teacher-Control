import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {
  constructor(private modal:NgbModal) { }
  

  ngOnInit(): void {
  }


/*openSM(contenido){
  this.modal.open(contenido,{size:'sm'});
}
openLG(contenido){
  this.modal.open(contenido,{size:'lg'});
}
openXL(contenido){
  this.modal.open(contenido,{size:'xl'});
}
openCentrado(contenido){
  this.modal.open(contenido,{centered:true});
}
openScroll(contenido){
  this.modal.open(contenido,{scrollable:true});
}
openBackground(contenido){
  this.modal.open(contenido,{backdropClass:'azul'});
}
openWindow(contenido){
  this.modal.open(contenido,{windowClass:'oscuro'});
}*/
}

