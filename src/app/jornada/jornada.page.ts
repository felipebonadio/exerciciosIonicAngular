import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.page.html',
  styleUrls: ['./jornada.page.scss'],
})
export class JornadaPage {
  /*1. A jornada de trabalho semanal de um funcionário é de 40 horas. 
  O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o 
  valor da hora regular com um acréscimo de 50%. Faça um aplicativo mobile, usando Ionic, 
  que permita ao usuário digitar o número de horas trabalhadas em um mês, o salário por hora e 
  escreva o salário total do funcionário, que deverá ser acrescido das horas extras, 
  caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).*/
  horas: number;
  salario: number;
  extra: number;
  total: number;
  isfinal: number;
  msg: string;

  public verify(): void {
    this.calcularTotal();
    this.exibirMsg();
  }

  public calcularSalario(): void {
    this.total = this.salario * this.horas;
  }

  public calcularExtra(): void {
    if (this.horas > 40) {
      this.extra = this.salario * ((this.horas - 40) * 0.5);
    }
    else{
      this.extra = 0;
    }
  }

  public calcularTotal(): void {
    this.calcularSalario();
    this.calcularExtra();
    this.isfinal = this.total + this.extra;
  }

  public exibirMsg(): void {
    this.msg = "O salário total é " + this.isfinal;
  }
}
