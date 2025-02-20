import {Component, computed, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectCoursesData, selectLoading} from '../store/admin.selector';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  private store = inject(Store);
  public isLoading = this.store.selectSignal(selectLoading);
  public coursesData = this.store.selectSignal(selectCoursesData);
  public count = computed(() => this.coursesData().length);
  public isModalVisible: boolean = false;

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
