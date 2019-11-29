import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-sub-user',
  templateUrl: './sub-user.component.html',
  styleUrls: ['./sub-user.component.css'],
  providers:[MessageService]
})
export class SubUserComponent implements OnInit {

  addSubUserForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private messageService: MessageService) { }

  ngOnInit() {
    this.addSubUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]]
  });
  }

  get f() { return this.addSubUserForm.controls; }
  

  onSubmit() {
    this.submitted = true;
    console.log(this.addSubUserForm.controls)
    // stop here if form is invalid
    if (this.addSubUserForm.invalid) {
        return;
    }

    console.log('SUCCESS!! :-)\n\n' + this.addSubUserForm.value);
    this.authService.addSubUser(this.addSubUserForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.success==true){
          this.messageService.add({severity:'success', detail:data.message});
        
        }else{
          this.messageService.add({severity:'error', detail:data.message});
        }
        this.addSubUserForm.reset();
      }
    ),(err)=>{
        console.log("Error While saving");
    }
}
}
