import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'New Product Dal :D';
  user: string = 'Mert Ekici';// : string ile tip güvenli hale getirdik
  
}