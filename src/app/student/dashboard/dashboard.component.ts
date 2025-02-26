import {Component,OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUserProfile} from '../../admin/store/admin.selector';
import {adminActions} from '../../admin/store/admin.actions';
import {selectUser} from '../../auth/store/auth.selectors';
import {AdminService} from '../../admin/service/admin.service';
import {constants} from '../../utils/constants';
import {NgxSpinnerService} from 'ngx-spinner';
import {NgToastService} from 'ng-angular-popup';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public today: Date = new Date();
  public name: string = '';
  public dob: Date | null = null;
  public address: string | null = 'N/A';
  public phone: string | null = 'N/A';
  public programme: string | null = 'N/A';
  public email: string = '';
  public id: string = '';
  public courseId: string = constants.courseId;
  public isModalVisible: boolean = false;
  public loading: boolean = false;

  constructor(
    private store: Store,
    private adminService: AdminService,
    private spinner: NgxSpinnerService,
    private toast: NgToastService
  ) {}

  public ngOnInit() {
    const currentUser = this.store.selectSignal(selectUserProfile);
    const user = currentUser();
    const authInfo = this.store.selectSignal(selectUser)
    const userId = authInfo();
    if (user) {
      this.name = user.name;
      this.email = user.email;
      this.address = user.address;
      this.phone = user.phone;
      this.programme = user.programme;
      this.dob = user.dob;
    }
    if (userId) {
      this.id = userId.id;
    }
    this.store.dispatch(adminActions.getUserProfile({id: this.id}));
  }

  public registerCourse() {
    this.loading = true;
    this.spinner.show();
    this.adminService.registerCourse(this.courseId).subscribe({
      next: (response) => {
        this.loading = false;
        this.spinner.hide();
        this.toast.success(constants.registerSuccess, response.message, constants.toastDuration);
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        this.spinner.hide();
        this.toast.danger(constants.error, error.message, constants.toastDuration);
      }
    })
  }

  showModal() {
    this.isModalVisible = true;
  }

  cancelModal() {
    this.isModalVisible = false;
  }

  confirmData() {
    this.isModalVisible = false;
  }
}
