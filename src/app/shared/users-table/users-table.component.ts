import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AdminState} from '../../admin/store/admin.state';
import {selectLoading, selectUsersData} from '../../admin/store/admin.selector';
import {adminActions} from '../../admin/store/admin.actions';
import {User} from '../../model/users/users';

@Component({
  selector: 'app-users-table',
  standalone: false,
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent implements OnInit {
  private store = inject(Store<AdminState>);
  public isLoading = this.store.selectSignal(selectLoading);
  public usersData = this.store.selectSignal(selectUsersData);
  public isDropdownVisible: boolean[] = [];
  public selectedUser: User | null = null;

  constructor() {}

  public ngOnInit() {
    this.store.dispatch(adminActions.getAllUsers());
  }

  toggleDropdown(index: number) {
    this.isDropdownVisible = this.isDropdownVisible.map((visible, i) =>
      i === index ? !visible : false
    );
  }

  viewProfile(user: User) {
    this.selectedUser = user;
  }
}
