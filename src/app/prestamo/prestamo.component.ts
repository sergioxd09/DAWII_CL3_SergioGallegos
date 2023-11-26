import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrl: './prestamo.component.css'
})
export class PrestamoComponent {
  monto: number = 0;
  cuotas: number = 0;
  cuotaMensual: number = 0;

  calcularCuotas() {
    if (this.monto > 5000) {
      this.cuotas = 3;
    } else if (this.monto < 1000) {
      this.cuotas = 1;
    } else if (this.monto >= 2000 && this.monto <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    const tasaInteres = this.monto < 4000 ? 0.12 : 0.1;
    const totalConInteres = this.monto * (1 + tasaInteres);

    this.cuotaMensual = totalConInteres / this.cuotas;
  }
}