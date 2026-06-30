import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

const navItems = [
  { label: 'Tasks / Projects', path: '/dashboard/tasks' },
  { label: 'Learning', path: '/dashboard/learning' },
  { label: 'Feedback / Review', path: '/dashboard/feedback' },
  { label: 'Profile / Proof', path: '/dashboard/proof' },
  { label: 'Settings', path: '/dashboard/settings' },
];

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly navItems = navItems;
}
