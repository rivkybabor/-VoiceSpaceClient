import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { diagnostic } from 'src/app/Classes/diagnostic';
import { user } from 'src/app/Classes/user';
import { DiagnosticService } from 'src/app/Services/diagnostic.service';
import { UserService } from 'src/app/Services/user.service';
import { Diagnostic } from 'typescript';

@Component({
  selector: 'app-new-diagnostic',
  templateUrl: './new-diagnostic.component.html',
  styleUrls: ['./new-diagnostic.component.scss']
})
export class NewDiagnosticComponent implements OnInit {

  constructor(private UserSer:UserService,private DiagnosticSer:DiagnosticService, private route:ActivatedRoute, private router: Router) { }
select:any
  diagnostic:diagnostic=new diagnostic();
  addDiagnostic:boolean;
  userSer:UserService;
ngOnInit(): void {
  debugger
  if (parseInt(this.route.snapshot.paramMap.get('id')) == -1) {
    this.newUser=new user();
    this.newUser.IdSchool=JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool;
    //add Diadnostic
    this.addDiagnostic = true
    }
    else
    {
      this.addDiagnostic = false
     

      if (this.DiagnosticSer.AllDiagnostic!= null && this.DiagnosticSer.AllDiagnostic.length > 0) {
        for (let i = 0; i < this.DiagnosticSer.AllDiagnostic.length; i++)
          if (this.DiagnosticSer.AllDiagnostic[i].IdUser == parseInt(this.route.snapshot.paramMap.get('id')))
          {
            this.diagnostic = { ...this.DiagnosticSer.AllDiagnostic[i] }
            this.newUser = { ...this.DiagnosticSer.AllDiagnostic[i] }
          }
      }
    
  }

   



    
  }
  newUser:user;
  selectedValue:number;
  submit()
  {

    //check valid form
this.UserSer.addUser(this.newUser)
  .subscribe(myData =>

   { debugger
  //   if(typeof(myData)!=  'string')
  //  { debugger
  

  //   this.DiagnosticSer.getDiagnosticById(myData.IdUser)
  //     .subscribe(myData =>{if(this.DiagnosticSer.AllDiagnostic!=null && this.DiagnosticSer.AllDiagnostic!=undefined)
  //      { this.DiagnosticSer.AllDiagnostic.push(myData)
  //       this.router.navigate(['Manager/Diagnostic',myData.IdUser])
  //      }
  //       else
  //       this.DiagnosticSer.getAllDiagnosticBySchool(myData.IdSchool).subscribe(
  //         myData=>
  //         this.DiagnosticSer.AllDiagnostic=myData)
  //         this.router.navigate(['Manager/Diagnostic',myData.IdUser])
  //     }
  //       );


  //  }
  //   else
  //   alert(myData)
   },
   err=>
   {
     alert("שגיאה בעת הוספת מאבחן למערכת")
   }

    );
  }
  saveEdit()
  
  {
  
  this.userSer.addUser(this.newUser);
  }
  checkedPermission(value: number) {
debugger
    this.newUser.IdPermission = value;
  }


  
}
