import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgxFormProgressBarComponent } from './form-progress-bar.component';

describe('NgxFormProgressBar', () => {
  let component: NgxFormProgressBarComponent;
  let fixture: ComponentFixture<NgxFormProgressBarComponent>;

  beforeEach(async(() => {
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

  it('should return 50', () => {
    expect(component.calculateFormProgress(component.form)).toEqual(50);
  });
});
