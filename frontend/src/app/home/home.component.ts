import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  message = '';

  constructor(private http: HttpClient) {}

  getMessage() {
    this.http.get('http://localhost:5278/hello', { responseType: 'text' })
      .subscribe({
        next: (data) => this.message = data,
        error: (err) => console.error('Error fetching message:', err)
      });
  }
}


