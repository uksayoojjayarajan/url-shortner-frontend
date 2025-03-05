import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlShortnerService } from '../../services/url-shortner.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent {
  longUrl: string = '';
  @Output() shortUrlGenerated = new EventEmitter<string>();
  errorMessage: string = '';  

  constructor(private urlShortnerService: UrlShortnerService) {}

  shortenUrl() {
    this.errorMessage = ''; 

    if (!this.isValidUrl(this.longUrl)) {
      this.errorMessage = 'Invalid URL! Please enter a correct URL.';
      return; 
    }

    this.urlShortnerService.shortenUrl(this.longUrl).subscribe(
      response => {
        if (response.shortUrl) {
          this.shortUrlGenerated.emit(response.shortUrl);
        } else {
          this.errorMessage = 'Short URL generation failed!';
        }
      },
      error => {
        this.errorMessage = 'Error processing the URL!';
        console.error("Error shortening URL:", error);
      }
    );
  }

 
  isValidUrl(url: string): boolean {
    try {
      new URL(url);  
      return true;
    } catch {
      return false;
    }
  }
  
}
