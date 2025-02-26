import {Component, EventEmitter, Input, Output} from '@angular/core';
import { UpdateBio } from '../../model/users/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from '../../validators/nameValidator';
import {AdminService} from '../../admin/service/admin.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {NgToastService} from 'ng-angular-popup';
import {constants} from '../../utils/constants';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-update-bio-modal',
  standalone: false,
  templateUrl: './update-bio-modal.component.html',
  styleUrl: './update-bio-modal.component.scss'
})
export class UpdateBioModalComponent {
  public updateProfileForm: FormGroup;
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
  @Input() id!: string;
  public isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private spinner: NgxSpinnerService,
    private toast: NgToastService
  ) {
    this.updateProfileForm = this.fb.group({
      programme: ['', [Validators.required, nameValidator()]],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.updateProfileForm.invalid) return;
    this.isLoading = true;
    this.spinner.show();
    const user: UpdateBio = this.updateProfileForm.value;
    this.adminService.updateBioData(this.id,user).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.spinner.hide();
        this.toast.success(constants.updateBioSuccess, response.message, constants.toastDuration);
        this.submit.emit();
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.spinner.hide();
        this.toast.danger(constants.error, error.message, constants.toastDuration);
      }
    });
  }

  public onCancel() {
    this.cancel.emit();
  }

  public getControl(value: string) {
    return this.updateProfileForm.get(value);
  }
}
