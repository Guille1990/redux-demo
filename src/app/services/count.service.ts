import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

  getCount(): Promise<number> {
    return Promise.resolve(0);
  }
}
