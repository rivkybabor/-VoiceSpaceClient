import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Classes/user';
import { UserService } from 'src/app/Services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DiagnosticService } from 'src/app/Services/diagnostic.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userSer: UserService,
    private diagnosticSer: DiagnosticService,
    private AuthService:AuthService,

    private router: Router,
    private formBuilder: FormBuilder) { }
  userName: string
  password: string
  hide = true;
  registerForm: FormGroup;


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      passwordFC: new FormControl('', [Validators.required]),
      userNameFC: new FormControl('', [Validators.required])
    });
  }
  get f() { return this.registerForm.controls; }
  getErrorMessage() {
    if (this.f.passwordFC.hasError('required')) {
      return 'חובה להכניס סיסמה';
    }
    if (this.f.userNameFC.hasError('required')) {
      return 'חובה להכניס שם משתמש';
    }
  }
  login() {
    if (this.registerForm.invalid)
    {this.getErrorMessage()
      return;
    }

    this.userSer.getUserByUserNameAndPassword(this.userName, this.password).subscribe(
      myData => {
        if (myData == null) {
          alert("לא קיים שם משתמש וסיסמה במערכת. נא נסה שוב")
          this.registerForm.reset();
          return;
        }
        debugger
        localStorage.setItem("currentUser", JSON.stringify({ myData }));
        console.log(JSON.parse(localStorage.getItem('currentUser')).myData.FirstName);
        //console.log(myData);
        this.AuthService.loggedIn=true
        if (JSON.parse(localStorage.getItem('currentUser')).myData.IdPermission == '1') {

          this.router.navigate(["Manager"]);
        }
        else {
          this.router.navigate(["Diagnostic"]);
        }

      },
      myErr => {
        alert("תקלה במערכת. נא נסה שוב")
        this.registerForm.reset();
        console.log(myErr);
      }
    )
  }
  onReset() {
    this.registerForm.reset();
  }

}
