<h3 align="center">ngx-form-progress-bar</h3>

<p align="center">
  Add a progress bar to your Reactive Forms ⚡️ 
</p>

## Table of Contents

- [Demo](#demo)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [CSS](#css)

## Demo <a name="demo"></a>

Try a live example on StackBlitz: https://ngx-form-progress-bar-demo.stackblitz.io

## Install <a name="install"></a>

To install the package, just run:

```
$ npm install ngx-form-progress-bar
```

or the following if you are using yarn

```
$ yarn add ngx-form-progress-bar
```

## 🛠 Setup

Include the library in your module

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgxFormProgressBarModule } from 'ngx-form-progress-bar'; // <-- import it

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxFormProgressBarModule, // <-- and include it
  ],
  bootstrap: [AppComponent],
})
export class MyAppModule {}
```

## Usage <a name="usage"></a>

Add the `ngx-form-progress-bar` tag in your template. Don't forget to bind a FormGroup instance as an input property.

```javascript
import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  template: `
    <ngx-form-progress-bar [form]="form></ngx-form-progress-bar>
    <form [formGroup]="form" novalidate>
      <input type="text" formControlName="name">
      <input type="email" formControlName="email">
      <input type="tel" formControlName="phone">
      <button type="submit">Submit</button>
    </form>
  `,
})
export class CheckoutPage implements OnInit {

  public form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }
}
```

## 💅 CSS <a name="css"></a>

Customize the progress bar with CSS variables.

```css
ngx-form-progress-bar {
  --progress-height: 20px;
  --progress-radius: 48px;
  --progress-color: blue;
  --success-color: green;
}
```
