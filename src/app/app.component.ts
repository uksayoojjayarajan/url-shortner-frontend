import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UrlInputComponent } from './components/url-input/url-input.component';
import { UrlResultComponent } from './components/url-result/url-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UrlInputComponent, UrlResultComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URL Shortener';
  shortUrl: string = '';

  handleShortUrlGenerated(url: string) {
    this.shortUrl = url; 
  }
}
