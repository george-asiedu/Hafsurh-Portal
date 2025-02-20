import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {nameValidator} from '../../validators/nameValidator';
import {Store} from '@ngrx/store';
import {AdminState} from '../../admin/store/admin.state';
import {selectLoading} from '../../admin/store/admin.selector';
import {adminActions} from '../../admin/store/admin.actions';
import {AddCourse} from '../../model/courses/courses';

@Component({
  selector: 'app-add-course-modal',
  standalone: false,
  templateUrl: './add-course-modal.component.html',
  styleUrl: './add-course-modal.component.scss'
})
export class AddCourseModalComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
  public addCourseForm: FormGroup;
  private store = inject(Store<AdminState>);
  public isLoading = this.store.selectSignal(selectLoading);

  constructor(private fb: FormBuilder) {
    this.addCourseForm = this.fb.group({
      course_name: ['', [Validators.required, nameValidator()]],
      course_code: ['', Validators.required],
      credit_units: [0, [Validators.required, Validators.pattern(/^\d+$/)]]
    })
  }

  public onSubmit(): void {
    if (this.addCourseForm.invalid) return;

    const course: AddCourse = {
      ...this.addCourseForm.value,
      credit_units: Number(this.addCourseForm.value.credit_units)
    };
    this.store.dispatch(adminActions.addCourse({course}));
    this.addCourseForm.reset();
  }

  public onCancel() {
    this.cancel.emit()
  }

  public getControl(value: string) {
    return this.addCourseForm.get(value);
  }
}
