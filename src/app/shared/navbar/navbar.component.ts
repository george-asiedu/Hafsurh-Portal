import {Component, OnInit} from '@angular/core';
import { authActions } from '../../auth/store/auth.actions';
import {Store} from '@ngrx/store';
import {AuthState} from '../../auth/store/auth.state';
import {selectUser} from '../../auth/store/auth.selectors';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  public isDropdownOpen: boolean = false;
  public name: string = '';
  public role: string = '';

  public constructor(private store: Store<AuthState>) {}

  public ngOnInit() {
    const currentUser = this.store.selectSignal(selectUser);
    const user = currentUser();
    if (user) {
      this.name = user.name;
      this.role = user.role;
    }
  }

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public profile(): void {
    this.isDropdownOpen = false;
  }

  public logout(): void {
    this.store.dispatch(authActions.logout());
    this.isDropdownOpen = false;
  }
}
