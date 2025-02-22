import {Component, computed, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AdminState} from '../store/admin.state';
import {selectUsersData} from '../store/admin.selector';
import {selectUser} from '../../auth/store/auth.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit {
  public today: Date = new Date();
  public name: string = '';
  private store = inject(Store<AdminState>);
  public usersData = this.store.selectSignal(selectUsersData);
  public count = computed(() => this.usersData().length);

  public ngOnInit() {
    const currentUser = this.store.selectSignal(selectUser);
    const user = currentUser();
    if (user) {
      this.name = user.name;
    }
  }
}
