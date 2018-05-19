import { Component, OnInit } from '@angular/core';

import { Staff } from '../shared/staff'; 
import { StaffService } from '../services/staff.service'; 



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	staff: Staff[]; 

  constructor(private staffService: StaffService) { }

  ngOnInit() {
  	this.staff = this.staffService.getStaff(); 
  }

}
