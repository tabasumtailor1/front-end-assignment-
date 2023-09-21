import { Component} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  form: any;
  
  constructor(private userService: UserService) {}
 
  title = 'my-app';
  options!: FormGroup;

  users: any = [];
  postUsers: any = []
  formItems: any[] = [
    { firstName: '',lastName: '', selectedRadio: '', checkbox1: false, checkbox2: false }
  ];
ngOnInit(): void {
  this.getUser();
}
submitForm() {
  console.log(this.formItems);
}
  getUser() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      console.log(res);    
    })
}
  onSubmit() {  
    this.users.forEach((currentValue: any, index: any) => {
      this.postUsers.push( 
        {
        "name": currentValue.name,
        "value": currentValue.value
      })
    });
    this.userService.saveUser(this.postUsers).subscribe((response: any) => {
      console.log(response);
    });
  }

}

