import { Component, OnInit } from '@angular/core';

import { Career } from '../shared/career';
import { CareerService } from '../services/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  careers: Career[];

  constructor(private careerService: CareerService) { }

  ngOnInit() {
  }

}
