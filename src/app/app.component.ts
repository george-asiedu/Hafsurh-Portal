import {Component, HostListener, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgToastModule, ToasterPosition} from 'ng-angular-popup';
import { appActions } from './app-store/app.actions';
import { constants } from './utils/constants';
import { Store } from '@ngrx/store';
import {selectAuthFeature} from './auth/store/auth.selectors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public toastPosition = ToasterPosition.TOP_RIGHT;
  private store= inject(Store);
  private state = this.store.selectSignal(selectAuthFeature);
  private key: string = constants.storageKey;

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler(): void {
    const storageValue = JSON.stringify(this.state());
    localStorage.setItem(this.key, storageValue);
  }

  public ngOnInit() {
    const persistState = localStorage.getItem(this.key);
    if (persistState) {
      const storeData = JSON.parse(persistState);
      this.store.dispatch(appActions.getStoreData(storeData));
    }
    localStorage.removeItem(this.key);
  }
}
