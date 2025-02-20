import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {Course, UpdateCourse} from '../../model/courses/courses';
import {Store} from '@ngrx/store';
import {AdminState} from '../../admin/store/admin.state';
import {selectLoading} from '../../admin/store/admin.selector';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {nameValidator} from '../../validators/nameValidator';
import {adminActions} from '../../admin/store/admin.actions';

@Component({
  selector: 'app-edit-course-modal',
  standalone: false,
  templateUrl: './edit-course-modal.component.html',
  styleUrl: './edit-course-modal.component.scss'
})
export class EditCourseModalComponent implements OnChanges {
  @Output() cancel = new EventEmitter<void>()
  @Output() submit = new EventEmitter<void>()
  @Input() course: Course | null = null;
  public updateCourseForm: FormGroup;
  private store = inject(Store<AdminState>);
  public isLoading = this.store.selectSignal(selectLoading);

  constructor(private fb: FormBuilder) {
    this.updateCourseForm = this.fb.group({
      course_name: ['', [Validators.required, nameValidator()]],
      course_code: ['', Validators.required],
      credit_units: [0, [Validators.required, Validators.pattern(/^\d+$/)]]
    })
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['course'] && this.course) {
      this.setProject(this.course);
    }
  }

  public onCancel() {
    this.cancel.emit();
  }

  public onSubmit() {
    if(this.updateCourseForm.invalid) return;

    const course: UpdateCourse = {
      ...this.updateCourseForm.value,
      credit_units: Number(this.updateCourseForm.value.credit_units)
    };
    this.store.dispatch(adminActions.updateCourse({course}));
    this.updateCourseForm.reset();
  }

  private setProject(course: Course) {
    this.updateCourseForm.setValue({
      course_name: course.course_name,
      course_code: course.course_code,
      credit_units: course.credit_units
    });
  }

  public getControl(value: string) {
    return this.updateCourseForm.get(value);
  }
}
