import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../../shared-components/search/search.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  exit() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
