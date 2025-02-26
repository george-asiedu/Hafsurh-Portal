import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {adminActions} from '../../admin/store/admin.actions';
import {selectLoading, selectUserProfile} from '../../admin/store/admin.selector';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private store = inject(Store);
  public profile = this.store.selectSignal(selectUserProfile);
  public isLoading = this.store.selectSignal(selectLoading);

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(adminActions.getUserProfile({id}));
    }
  }
}
