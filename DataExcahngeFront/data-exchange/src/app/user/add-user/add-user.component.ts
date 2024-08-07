import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFormData } from 'src/app/core/models/form.model';
import { Department, Gender, User } from 'src/app/core/models/user.model';
import { FormService } from 'src/app/core/services/form.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  userForm: FormGroup<UserFormData> = this.formService.userForm();
  user: User | null = null;
  departments: Department[] | null = []
  genders: Gender[] | null = []

  constructor(
    private formService: FormService, 
    private userService: UserService
  ){
    this.departments = Object.values(Department);
    this.genders = Object.values(Gender);
  }

  addUser(){
    if(this.userForm !== null){
      const userFromForm = {
        email: this.userForm.value.email ?? '',
        gender: this.userForm.value.gender ?? '',
        password: this.userForm.value.password ?? '',
        birthDate: this.userForm.value.birthDate ?? '',
        department: this.userForm.value.department ?? ''
      }
      console.log(this.userForm.getRawValue())
      this.user = userFromForm;
      this.userService.addUser(this.user).subscribe({
        next: (resp) => console.log(resp),
        error: (err) => console.log(err)
      })
    }
  }
}
