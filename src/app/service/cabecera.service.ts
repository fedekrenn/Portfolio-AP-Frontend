import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabeceraService {
  @Output() headerActualizer: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
