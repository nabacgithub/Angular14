import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm: User ={
    id:0,
    product:'',
    price:0,
  };
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.service.create(this.userForm).subscribe({
      next:(data)=>{
        this.router.navigate(["/users"])
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
