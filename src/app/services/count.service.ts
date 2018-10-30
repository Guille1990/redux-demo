import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

  async getCount(val: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      if (typeof val !==  'number') {
        reject(new Error('El valor no es un número'));
      }

      setTimeout(() => {
        resolve(val);
      }, 2000);
    });
  }
}
