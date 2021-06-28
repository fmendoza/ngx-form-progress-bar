import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-form-progress-bar-tester';

  public form!: FormGroup;

  ngOnInit() {
    this.setupForm();
  }

  setupForm(): void {
    this.form = new FormGroup({
      documentType: new FormControl('', {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      documentName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32),
        ],
        updateOn: 'blur',
      }),
      category: new FormControl('', {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(132),
        ],
        updateOn: 'blur',
      })
    });
  }
}
