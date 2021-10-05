import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
 /* 3.      Faça​ um aplicativo mobile, usando Ionic, que permita ao usuário digitar:
   a descrição do produto (nome), a quantidade adquirida e o preço unitário. O aplicativo deverá 
   calcular e exibir o total (total = quantidade adquirida * preço unitário), o desconto 
   e o total a pagar (total a pagar = total - desconto), sabendo-se que:

  - Se quantidade <= 5 o desconto será de 2%
 
  - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
 
  - Se quantidade > 10 o desconto será de 5%.*/
  constructor() { }

  ngOnInit() {
  }

}
