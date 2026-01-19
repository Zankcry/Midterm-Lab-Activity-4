import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {
        id: 'P-101',
        name: 'Chevrolet Corvette Stingray',
        description: 'The standard mid-engine sports car',
        price: '$' + 68300.00
      },
      {
        id: 'P-102',
        name: 'Chevrolet Corvette Z06',
        description: 'High-performance track-focused version',
        price: '$' + 112700.00
      },
      {
        id: 'P-103',
        name: 'Chevrolet Corvette E-Ray',
        description: 'Hybrid all-wheel-drive performance',
        price: '$' + 104900.00
      },
      {
        id: 'P-104',
        name: 'Chevrolet Corvette ZR1',
        description: 'The ultimate high-performance corvette',
        price: '$' +  150000.00
      }
    ];
  }
}
