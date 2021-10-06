import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voto',
  templateUrl: './voto.page.html',
  styleUrls: ['./voto.page.scss'],
})
export class VotoPage {

  /*2.      Faça um aplicativo mobile, usando Ionic, que permita ao usuário digitar o ano de 
  nascimento de uma pessoa. O aplicativo deverá exibir uma mensagem que diga se ela poderá 
  ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). Pesquise a regra de idade por votação.*/


  public birthdate: number;
  public age: number;
  public msg: String;
  public year: number;

  public verify(): void{
    this.calculateAge();
    this.showMsg(this.age);
  }
  
  public calculateAge(): void {
    this.age = this.year - this.birthdate;    
  }
  public showMsg(age:number):void{
    if (age<16){
      this.msg= "Você não poderá votar este ano!"
    } else if( age <18 || age>70){
      this.msg = "Seu voto é opcional este ano!"
    } else{
      this.msg= "Seu voto é obrigatório este ano!"
    }    
  }
}

