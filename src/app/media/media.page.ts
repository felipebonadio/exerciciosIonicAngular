import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage {
 nome:string;
 n1:number;
 n2:number;
 n3:number;
 n4:number;
 n5:number;
 msg:string;
 media:number;
 
 private calcular():void{
  this.media = (this.n1 + this.n2 + this.n3 + this.n4 + this.n5) / 5;
  if (this.media >= 5){
    this.msg = "APROVADO"
  }else{
    this.msg = "REPROVADO"
  }
 }
}
