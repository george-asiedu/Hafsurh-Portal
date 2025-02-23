import {Component, EventEmitter, inject, Output} from '@angular/core';
import {UpdateBio} from '../../model/users/users';
import {adminActions} from '../../admin/store/admin.actions';
import {selectLoading} from '../../admin/store/admin.selector';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {nameValidator} from '../../validators/nameValidator';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-update-bio-modal',
  standalone: false,
  templateUrl: './update-bio-modal.component.html',
  styleUrl: './update-bio-modal.component.scss'
})
export class UpdateBioModalComponent {
  private store = inject(Store);
  public isLoading = this.store.selectSignal(selectLoading);
  public updateProfileForm: FormGroup;
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.updateProfileForm = this.fb.group({
      programme: ['', [Validators.required, nameValidator()]],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }
  public updateProfile() {
    if (this.updateProfileForm.invalid) return;

    const user: UpdateBio = this.updateProfileForm.value;
    this.store.dispatch(adminActions.updateUserBio({user}));
  }

  public onCancel() {
    this.cancel.emit();
  }

  public getControl(value: string) {
    return this.updateProfileForm.get(value);
  }
}
