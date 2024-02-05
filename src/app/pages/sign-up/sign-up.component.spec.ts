import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SignUpComponent } from './sign-up.component';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { UserStore } from '../../store/user.store';
import { UserService } from '../../store/user.service';
import { Signal } from '@angular/core';
import { StateSignal } from '@ngrx/signals/src/state-signal';
import { Observable, Unsubscribable } from 'rxjs';
import { User } from '../../store/user.state';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let userStore: { users: Signal<User[]>; loading: Signal<boolean>; addUser: ((input: User | Observable<User> | Signal<User>) => Unsubscribable) & Unsubscribable; } & StateSignal<{ users: User[]; loading: boolean; }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, FormInputComponent, ButtonComponent, SignUpComponent, HttpClientModule],
      providers: [UserStore, UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    userStore = TestBed.inject(UserStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.userFormGroup.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.userFormGroup.controls['emailInput'];
    expect(email.valid).toBeFalsy();

    // Required field
    let errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to a valid email
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['email']).toBeFalsy();
  });

});
