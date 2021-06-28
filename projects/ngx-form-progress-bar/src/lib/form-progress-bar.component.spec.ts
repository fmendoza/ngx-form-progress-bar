import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgxFormProgressBarComponent } from './form-progress-bar.component';

describe('NgxFormProgressBar', () => {
  let component: NgxFormProgressBarComponent;
  let fixture: ComponentFixture<NgxFormProgressBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgxFormProgressBarComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(NgxFormProgressBarComponent);
    component = fixture.componentInstance;

    component.form = fb.group({
      name: ['Name', Validators.required],
      email: ['', Validators.required],
    });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass a FormGroup instance', () => {
    expect(component.form).toBeInstanceOf(FormGroup);
  });

  it('should return 50', () => {
    expect(component.calculateFormProgress(component.form)).toEqual(50);
  });
});
