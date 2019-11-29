import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AuthService } from '../shared/services/auth.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css'],
  providers:[MessageService]
})
export class AddShopComponent implements OnInit {

  addShopForm: FormGroup;
  submitted = false;
  address: FormArray;
  titleFormGroup: FormGroup;
  cars:any;
  subUserEmpty:boolean=false;
  subUserList:any=[];
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private messageService: MessageService) { }

  ngOnInit() {
    this.getSubUser();
    this.addShopForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      address: this.formBuilder.array([this.createItem()]),
      subUser:['', Validators.required],
  });
  }
  getSubUser(){
    this.authService.getSubUser().subscribe(
      (data:any)=>{
        console.log(data);
       let dataUser=data;
       for(let i=0;i<dataUser.data.length;i++){
        this.subUserList.push({label:dataUser.data[i].name, value:{name:dataUser.data[i].name, email: dataUser.data[i].email}})
       }
      }
    ),(err)=>{
        console.log("Error While fetching");
    }
  }

  get f() { console.log();
   
    return this.addShopForm.controls; }
  
  //this function is wriiten to avoid formArray error i.e., property 'controls' does not exist on type 'abstractcontrol'.
  get formDataFun() {
   return <FormArray>this.addShopForm.get('address');
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addShopForm.controls.subUser.errors);
    if(this.addShopForm.controls.subUser['errors']!=null){
      this.subUserEmpty=true;
    }else{
      this.subUserEmpty=false;
    }
    if (this.addShopForm.invalid) {
        return;
    }

    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.addShopForm.value));
    this.authService.addShop(this.addShopForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.success==true){
          this.messageService.add({severity:'success', detail:data.message});
        }else{
          this.messageService.add({severity:'error', detail:data.message});
   
        }
        this.addShopForm.reset();
      }
    ),(err)=>{
        console.log("Error While saving");
    }
}

//use to apply dynamic validation to formbuilder
createItem(): FormGroup {
  return this.formBuilder.group({
    plotNo: [null, [Validators.required]],
    locality: [null, [Validators.required]],
    pincode: [null, [Validators.required]],
  });
}

addInput(): void {
  this.address = this.addShopForm.get('address') as FormArray;
  this.address.push(this.createItem());
}

delInput(index: number): void {
  const arrayControl = <FormArray>this.addShopForm.controls['address'];
  arrayControl.removeAt(index);
}
}
