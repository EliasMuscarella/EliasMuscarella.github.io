import { Component } from '@angular/core';
import { tickertapeItems } from './tickertapeData';

@Component({
  imports: [],
  selector: 'app-tickertape',
  styleUrl: './tickertape.css',
  templateUrl: './tickertape.html',
})
export class Tickertape {
  tickertapeItems = tickertapeItems;
}
