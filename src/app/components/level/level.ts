import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './level.html',
  styleUrl: './level.css',
})
export class Level implements OnInit {
  nombre: string = '';
  imagen: string = '';
  descripcion: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const level = params.get('level');

      this.cargarDatos(level);
    });
  }
  cargarDatos(level: string | null) {
    let lev: number;
    if (level) {
      lev = Number(level);
    } else {
      lev = 1; //Si level es null, el valor por defecto será 1
    }

    if (lev >= 1 && lev <= 15) {
      this.nombre = 'Bulbasaur';
      this.imagen = '/assets/bulbasaur.png';
      this.descripcion =
        'Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.';
    } else if (lev >= 16 && lev <= 31) {
      this.nombre = 'Ivysaur';
      this.imagen = '/assets/ivysaur.png';
      this.descripcion =
        'Cuanta más luz solar recibe, más aumenta su fuerza y más se desarrolla el capullo que tiene en el lomo.';
    } else if (lev >= 32) {
      this.nombre = 'Venusaur';
      this.imagen = '/assets/venusaur.png';
      this.descripcion =
        'Puede convertir la luz del sol en energía. Por esa razón, es más poderoso en verano.';
    }
  }

  //MÉTODOS PARA LOS ROUTERLINK level.html:
  getImagenRouterLink(): string {
    if (this.nombre === 'Bulbasaur') return '/bulbasaur/16';
    if (this.nombre === 'Ivysaur') return '/bulbasaur/32';
    return '';
  }

  getBotonEvolucionLink(): string {
    if (this.nombre === 'Bulbasaur') return '/ivysaur';
    if (this.nombre === 'Ivysaur') return '/venusaur';
    return '';
  }

  getBotonRetrocederLink(): string {
    if (this.nombre === 'Ivysaur') return '/bulbasaur';
    if (this.nombre === 'Venusaur') return '/ivysaur';
    return '';
  }
}
