import {Component, computed, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUsersData} from '../store/admin.selector';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private store = inject(Store);
  public usersData = this.store.selectSignal(selectUsersData);
  public count = computed(() => this.usersData().length);
}
