import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userForm: User ={
    id:0,
    product:'',
    price:0,
  };
  constructor(private service:UserService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id=Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id:number){
    this.service.getById(id).subscribe((data)=>{
      this.userForm=data
    })
  }

  

  update(){
    this.service.update(this.userForm)
    .subscribe({
      next:(data)=>{
        this.router.navigate(["/users"]);
      },error:(error)=>{console.log(error)}
    })
  }

}
