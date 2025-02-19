import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public isSidebarCollapsed: boolean = false

  public toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed
  }
}
