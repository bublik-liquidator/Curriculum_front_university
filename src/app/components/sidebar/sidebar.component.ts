import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'sidebar',
  standalone: true,
  providers: [LoginService],
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  activeElement: string | undefined;
  isMenuOpen = true;
  menuItems = [
    { en: 'Curriculas', ru: 'Программы' },
    { en: 'Users', ru: 'Пользователи' },
    { en: 'Specialties', ru: 'Специальности' },
    { en: 'Educations', ru: 'Форма обучения' },
    { en: 'Statuses', ru: 'Статусы' },
  ];
  isAdmin: boolean;

  constructor(private router: Router, private authService: LoginService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeElement = this.menuItems.find((item) =>
          this.router.url.includes(item.en)
        )?.en;
      }
    });
    this.isAdmin = this.authService.checkToken('isAdmin') as boolean;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
