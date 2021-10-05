import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BancoPage {
  
  private nome:string;
  private saldomedio:number;
  private credito:number;
  private msg:string;

  private calcular():void{
    if(this.saldomedio<500){
      this.credito = 0;
      this.msg = "0,00"
    }
    else if (this.saldomedio<=1000){
      this.credito = this.saldomedio *0.2;
    }
    else if (this.saldomedio<=2000){
      this.credito = this.saldomedio *0.3;
    }
    else{
      this.credito = this.saldomedio *0.4;
    }
  }
}
