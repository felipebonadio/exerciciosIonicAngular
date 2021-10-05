import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.page.html',
  styleUrls: ['./salario.page.scss'],
})
export class SalarioPage {

 private nome:string;
 private salario:number;
 private aumento:number;
 private resultado: number;
 private total: number;

 private calcular():void{
   this.resultado = this.salario * ((this.aumento)/100);
   this.total = this.salario + this.resultado;
 }
}
