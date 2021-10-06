import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage {
 /* 3.      Faça​ um aplicativo mobile, usando Ionic, que permita ao usuário digitar:
   a descrição do produto (nome), a quantidade adquirida e o preço unitário. O aplicativo deverá 
   calcular e exibir o total (total = quantidade adquirida * preço unitário), o desconto 
   e o total a pagar (total a pagar = total - desconto), sabendo-se que:

  - Se quantidade <= 5 o desconto será de 2%
 
  - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
 
  - Se quantidade > 10 o desconto será de 5%.*/
  msg: String;
  nome: String;
  quant: number;
  preco: number;
  total: number;
  desconto: number;
  precoDesconto: number;
  precoFinal: number;
  
  showMsg(): void{
    this.calcularTotal();
    this.msg = "O preço final do produto "+ this.nome + " é R$" + this.precoFinal;
  }

  calcularTotal():void{
    this.aplicarDesconto();
    this.calcularPreco();
    this.precoFinal = this.total - this.precoDesconto;
  }


  calcularPreco():void{
    this.total = this.preco * this.quant;
  }

  calcularDesconto():void{
    if (this.quant<=5){
      this.desconto = 0.02; 
    }else if (this.quant>5 && this.quant <=10){
      this.desconto = 0.03;
    }else{
      this.desconto = 0.05;
    }
  }
  aplicarDesconto():void{
    this.calcularPreco();
    this.calcularDesconto();
    this.precoDesconto = this.desconto * this.total;
  }

}
