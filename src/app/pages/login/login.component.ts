import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ThemeToggleComponent } from "../../components/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, ThemeToggleComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private themeService: ThemeService) {}

  model = {
    email: '',
    password: '',
  };
  hidepassword: boolean = true;

  ngOnInit(): void {
    this.themeService.initTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme() === 'dark-theme';
  }

  togglePassword() {
    this.hidepassword = !this.hidepassword;
  }

  onSubmit(form: NgForm) {}
}
