import { Injectable } from '@angular/core';

import { Staff } from '../shared/staff'; 
import { STAFF } from '../shared/staffs'; 

@Injectable()
export class StaffService {

	getStaff(): Staff[] {
		return STAFF; 
	}

  constructor() { }

}
