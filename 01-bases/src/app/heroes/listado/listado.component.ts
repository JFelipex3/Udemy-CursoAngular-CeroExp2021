import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    //this.heroes.splice(4,1); // Borra el elemento de la posición 4
    //this.heroes.shift() // Borra el primer elemento del arreglo y lo retorna
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
