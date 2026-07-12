import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { DASHBOARD_NAV_ITEMS } from '../../config/navigation.config';

@Component({
  selector: 'app-dashboard-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard-shell.html',
  styleUrl: './dashboard-shell.scss',
})
export class DashboardShellComponent {
  protected readonly navItems = DASHBOARD_NAV_ITEMS;
}
