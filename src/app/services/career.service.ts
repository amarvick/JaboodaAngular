import { Injectable } from '@angular/core';

import { Career } from '../shared/career';
import { CAREERS } from '../shared/careers';

@Injectable()
export class CareerService {

  getCareers(): Career[] {
    return CAREERS;
  }

  constructor() { }

}
