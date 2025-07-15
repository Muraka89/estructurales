import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estructurales';

  isVisible:boolean=true;

  toggle():void{
    this.isVisible=!this.isVisible;
  }

  /*********** */

  lenguajes:string[]=['C/C++', 'Java', 'Phyton', 'Javascript']
  nuevo:string='';

  addItem():void{
    this.lenguajes.push(this.nuevo);
    this.nuevo=''; /*regresa la variable en blanco*/
  }

  /************* */

  selectedOption:string='default';

}
