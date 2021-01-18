import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormserviceService } from './formservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-app';
  addressArr:any =[{
    address: '',
    street: '',
    city: '',
    country: ''
  }]
  
  constructor(private formserviceService: FormserviceService){}
  ngOnInit(): void {
  }
  data:any;
  Submitform(){
    
    const formData =  new  FormData();
    for(let i = 0; i < this.addressArr.length; i++) {
      formData.append("address[]",  this.addressArr[i].address);
      formData.append("street[]",  this.addressArr[i].street);
      formData.append("city[]",  this.addressArr[i].city);
      formData.append("country[]",  this.addressArr[i].country);
    }
    this.formserviceService.postaddressData(formData).subscribe(
      (res: any) => {
        if (res.HttpHeaders.status === 200) {
          let Msg = 'You have successfully submitted!';
         console.log(Msg);
        } (err:HttpErrorResponse)=>{
          console.log(err.message);
      }
      }),
      () => {};
      
  }


 
  
  addAddress() {
    this.addressArr.push({
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  
  removeAddress(i: number) {
    this.addressArr.splice(i, 1);
  }
}
