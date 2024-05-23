import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NgFor } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IField } from '../../models/fieldForShared';
import { IButton } from '../../models/buttonForShared';

interface DialogData {
  fields: IField[];
  buttons: IButton[];
}
@Component({
  selector: 'edit',
  standalone: true,
  providers: [NzMessageService],

  imports: [
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzDropDownModule,
    NzCheckboxModule,
    NgFor,
    NzSelectModule,
    NzAlertModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any
  ) {}
  validFormInfo: string = '';
  form!: FormGroup;

  createForm(): FormGroup {
    const group = this.fb.group({});
    this.inputData.fields.forEach(
      (field: { type: string; field: string; value: any }) => {
        if (field.type === 'checkbox') {
          if (Array.isArray(field.value)) {
            field.value.forEach((specialty) => {
              group.addControl(
                specialty.name,
                new FormControl(specialty.selected)
              );
            });
          }
        } else if (field.type === 'select') {
          if (!group.contains(field.field)) {
            group.addControl(field.field, new FormControl(field.value));
          }
        } else {
          group.addControl(
            field.field,
            new FormControl(field.value, Validators.required)
          );
        }
      }
    );
    return group;
  }

  ngOnInit() {
    this.form = this.createForm();
  }

  Save() {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      if (
        'password' in this.form.controls &&
        this.form.controls['password'].pristine
      ) {
        delete formData['password'];
      }
      this.dialogRef.close(formData);
    } else {
      Object.keys(this.form.controls).forEach((field) => {
        if (this.form.controls[field].invalid) {
          this.message.create(
            'error',
            `Поле <strong>${field}</strong> не валидно`,
            {
              nzDuration: 5000,
            }
          );
        }
      });
    }
  }
}
