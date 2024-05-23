import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditComponent } from '../../shared-components/edit/edit.component';
@Component({
  selector: 'login',
  standalone: true,
  providers: [LoginService],
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formErrors = '';
  private destroySubject = new Subject<void>();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.loginForm.setValue({
      login: '',
      password: '',
    });
  }

  validateForm() {
    this.formErrors = '';
    if (this.loginForm.invalid) {
      const invalidFields = Object.keys(this.loginForm.controls).filter(
        (field) => this.loginForm.get(field)!.invalid
      );
      this.formErrors = `${invalidFields.join(', ')} требуется.`;
      invalidFields.forEach((field) =>
        this.loginForm.get(field)!.markAsTouched({ onlySelf: true })
      );
    }
  }

  login() {
    this.loginService
      .login(this.loginForm.value.login, this.loginForm.value.password)
      .pipe(takeUntil(this.destroySubject))
      .subscribe({
        next: (token) => {
          localStorage.setItem('token', token.token);
          this.router.navigate(['/account/Curriculas']);
        },
        error: (error) => {
          console.log(error.error);
          if (error.message.includes('net')) {
            this.openModal(
              'Проблемы с сервером. Пожалуйста, попробуйте позже.'
            );
          } else {
            this.openModal(error.error);
          }
        },
      });
  }

  openModal(message: string) {
    const dialogRef: MatDialogRef<EditComponent> = this.dialog.open(
      EditComponent,
      {
        data: {
          fields: [
            {
              field: 'name',
              type: 'info',
              value: message,
            },
          ],
        },
      }
    );
    return dialogRef.afterClosed().pipe(
      map(() => dialogRef),
      takeUntil(this.destroySubject)
    );
  }
}
