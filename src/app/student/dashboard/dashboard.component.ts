import {Component, computed, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AdminState} from '../../admin/store/admin.state';
import {selectUsersData} from '../../admin/store/admin.selector';
import {selectUser} from '../../auth/store/auth.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public today: Date = new Date();
  public name: string = '';
  public dob: string | null = 'N/A';
  public address: string | null = 'N/A';
  public phone: string | null = 'N/A';
  public programme: string | null = 'N/A';
  public email: string = '';

  constructor(private store: Store) {}

  public ngOnInit() {
    const currentUser = this.store.selectSignal(selectUser);
    const user = currentUser();
    if (user) {
      this.name = user.name;
      this.email = user.email;
      this.address = user.address;
      this.phone = user.phone;
      this.programme = user.programme;
      this.dob = user.dob;
    }
  }
}
