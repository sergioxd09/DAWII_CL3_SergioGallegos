import { Component } from '@angular/core';

@Component({
  selector: 'app-caso-almacen',
  templateUrl: './caso-almacen.component.html',
  styleUrl: './caso-almacen.component.css'
})
export class CasoAlmacenComponent {
  cantidad: number = 0;
  precio: number = 0;
  descuento: number = 0;
  totalPagar: number = 0;

  calcularDescuento() {
    const valorTotal = this.cantidad * this.precio;

    if (valorTotal > 200) {
      this.descuento = valorTotal * 0.2;
    } else {
      this.descuento = 0;
    }

    this.totalPagar = valorTotal - this.descuento;
  }
}
