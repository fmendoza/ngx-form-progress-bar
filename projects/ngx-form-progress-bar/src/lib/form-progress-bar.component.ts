import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-form-progress-bar',
  template: `
    <div class="form-progress-bar-wrapper">
      <div class="form-progress-bar" [class]="progress === 100 ? 'progress-complete' : ''" [style.width.%]="progress">
      </div>
    </div>
  `,
  styles: [`
    .form-progress-bar-wrapper {
      background-color: var(--progress-wrapper-color, #e8ebee);
      border-radius: var(--progress-radius, 6px);
      height: var(--progress-height, 1em);
      width: 100%;
    }

    .form-progress-bar {
      background: var(--progress-color, #0d6efd);
      border-radius: inherit;
      height: 100%;
      transition: var(--progress-transition, width .6s cubic-bezier(0.4, 0.0, 0.2, 1));
    }

    .form-progress-bar.progress-complete {
      background: var(--success-color, #198754);
    }
  `]
})
export class NgxFormProgressBarComponent implements OnInit, OnDestroy {

  @Input() form: FormGroup;

  public progress: number;

  public formObserver: Subscription;

  constructor() {
    this.progress = 0;
  }

  ngOnInit(): void {
    this.formObserver = this.form.valueChanges
      .subscribe(() => this.onFormChanged(this.form));
  }

  ngOnDestroy(): void {
    this.formObserver.unsubscribe();
  }

  onFormChanged(form: FormGroup): void {
    this.progress = this.calculateFormProgress(form);
  }

  calculateFormProgress(form: FormGroup): number {

    const controlCount = Object.keys(form.controls).length;
    let validCount = 0;

    for (const [key, value] of Object.entries(form.controls)) {
      if (value.valid) {
        validCount++;
      }
    }

    return validCount / controlCount * 100;
  }

}
