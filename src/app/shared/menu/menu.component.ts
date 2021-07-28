import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {

      this.items = [
        {
          label: 'Compras',
          icon: 'pi pi-wallet',
          items: [
            {
              label: 'Agregar Orden de compra',
              icon: 'pi pi-plus',
              routerLink: '/'
            },
            {
              label: 'Recibir Orden de compra',
              icon: 'pi pi-check-square',
              routerLink: 'numeros'
            },
            {
              label: 'Reporte de compras',
              icon: 'pi pi-chart-line',
              routerLink: 'no-comunes'
            },
          ]
        },
        {
          label: 'Ventas',
          icon:'pi pi-money-bill',items: [
            {
              label: 'Agregar pedido',
              icon: 'pi pi-plus',
              routerLink: '/'
            },
            {
              label: 'Listar pedidos',
              icon: 'pi pi-bars',
              routerLink: 'numeros'
            },
            {
              label: 'Reporte de ventas',
              icon: 'pi pi-chart-line',
              routerLink: 'no-comunes'
            },
          ]
        },
        {
          label: 'Inventario',
          icon:'pi pi-sitemap',items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar',
              routerLink: 'numeros'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'no-comunes'
            },
          ]
        },
        {
          label: 'Productos',
          icon:'pi pi-shopping-cart',items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar',
              routerLink: 'numeros'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'no-comunes'
            },
          ]
        },
        {
          label: 'Usuarios',
          icon:'pi pi-users',items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar',
              routerLink: 'numeros'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'no-comunes'
            },
          ]
        }
    ];
  }

}
