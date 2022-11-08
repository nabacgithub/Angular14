import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';




declare var window:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  userInfo: User[] = [];
  userfiltre: User[]=[];
  


  constructor(public userService: UserService,private router:Router) {
   
   }
   deletemodal:any;
idToDelete:number=0;
   
    ngOnInit(): void {
   
      this.deletemodal= new window.bootstrap.Modal(
        document.getElementById("deletemodal")
      );
      this.userService.getUsers().subscribe(response => {
          this.userInfo=response
          console.log(this.userInfo);
          
      });

      this.deletemodal=new window.bootstap.Modal(
        document.getElementById("deletemodal")
      )
  }

  deleteUser(){
    this.userService.deleteUsers().subscribe(res => {
         //this.userInfo = this.userInfo.filter(item => item.id !== id);
         console.log('User deleted successfully!');
    })
  }

  consult(m:{value:any;}){
    // console.log(m.value.nom)
    Swal.fire("Logout","Bonjour M. "+ m.value.id+ "  Votre Id est: "+ m.value.product, "success");
      this.router.navigate(['/'])

  }



  param:String='';
  handleInput(){
          
    this.userService.getByString(this.param).subscribe((data)=>{
      this.userfiltre=data
     
    })
   
  }

  /*delete(){
    this.userService.deleteUsers().subscribe(response => {
      this.userInfo=response
      console.log(this.userInfo);
      
  });
  }*/

  openDeleteModal(id:number){
    this.idToDelete=id;
    this.deletemodal.show();
  }

  delete(){
    this.userService.delet(this.idToDelete)
    .subscribe(()=>{
      this.userInfo=this.userInfo.filter(_=>_.id !==this.idToDelete);

      this.deletemodal.hide();
    })
  }
  
  
  
}



