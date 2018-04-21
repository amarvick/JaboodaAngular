import { Component, OnInit, Inject } from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {

    form: FormGroup;
    description: string;

  constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ProjectDialogComponent>
        // @Inject(MAT_DIALOG_DATA) public data: any
      ) {

        // this.description = data.description; { }
      }

  ngOnInit() {
    this.form = this.fb.group({
      // description: [description, []],
      
    });
  }

  close() {
    this.dialogRef.close();
  }

}
