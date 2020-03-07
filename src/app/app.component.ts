import { Component } from '@angular/core';
import listademanolos from '../assets/json/manolo.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniproyecto-dos';
  manolos: any = listademanolos;
}
