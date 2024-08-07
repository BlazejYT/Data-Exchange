import { FormControl } from "@angular/forms";

export interface UserFormData {
    email: FormControl<string>;
    password: FormControl<string>;
    gender: FormControl<string>;
    birthDate: FormControl<string>;
    department: FormControl<string>;
}