import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClientModule) {}

  public getProducts(): Observable<any> {
    return of([
      {
        id: 0,
        productName: 'TV',
        productCode: 'P_000',
        description: 'Multi brand smart TV',
        starRating: 5
      },
      {
        id: 1,
        productName: 'FANS',
        productCode: 'P_001',
        description: 'FANS',
        starRating: 5
      },
      {
        id: 2,
        productName: 'WASHING MACHINE',
        productCode: 'P_002',
        description: 'WASHING MACHINE',
        starRating: 5
      },
      {
        id: 3,
        productName: 'REFRIGATOR',
        productCode: 'P_003',
        description: 'REFRIGATOR',
        starRating: 5
      },
      {
        id: 4,
        productName: 'AIR CONDITIONER',
        productCode: 'P_004',
        description: 'AIR CONDITIONER',
        starRating: 5
      },
      {
        id: 5,
        productName: 'MUSIC SYSTEM',
        productCode: 'P_005',
        description: 'MUSIC SYSTEM',
        starRating: 5
      }
    ]).pipe(delay(200));
  }
}
