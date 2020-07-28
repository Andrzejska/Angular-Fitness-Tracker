import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription, Observable } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoading$: Observable<boolean>;
  loginForm: FormGroup;
  constructor(private authService: AuthService, private uiService: UIService, private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required]
      }
      )
    });
  }
  onSubmit(f: FormGroup) {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
  }

}
