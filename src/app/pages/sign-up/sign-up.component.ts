import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { UserStore } from '../../store/user.store';
import { UserService } from '../../store/user.service';

@Component({
  selector: 'dlg-sign-up',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, FormInputComponent, ButtonComponent],
  providers: [UserStore, UserService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  
 userFormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailInput: new FormControl('', [Validators.required, Validators.email]),
});
readonly store = inject(UserStore);
userService = inject(UserService);



  onSubmit(): void {
    
      const firstName = this.userFormGroup.value.firstName ?? ''; 
      const lastName = this.userFormGroup.value.lastName ?? '';
      const email = this.userFormGroup.value.emailInput ?? '';
      this.store.addUser({firstName, lastName, email});
    
   
  }
  
}
