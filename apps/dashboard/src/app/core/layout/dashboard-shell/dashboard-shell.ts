import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { APP_ENV } from '../../config/app-env.token';
import { DASHBOARD_NAV_ITEMS } from '../../config/navigation.config';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard-shell.html',
  styleUrl: './dashboard-shell.scss',
})
export class DashboardShellComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly env = inject(APP_ENV);

  protected readonly navItems = DASHBOARD_NAV_ITEMS;
  protected readonly authEnabled = this.env.auth.enabled;
  protected readonly userEmail = this.auth.userEmail;

  protected async signOut(): Promise<void> {
    await this.auth.signOut();
    await this.router.navigateByUrl('/auth/login');
  }
}
