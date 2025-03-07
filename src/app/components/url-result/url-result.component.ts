import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlShortnerService } from '../../services/url-shortner.service';
import { HttpErrorResponse } from '@angular/common/http'; // ✅ Import this

@Component({
  selector: 'app-url-result',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule for *ngIf
  templateUrl: './url-result.component.html',
  styleUrls: ['./url-result.component.css']
})
export class UrlResultComponent {
  @Input() shortUrl: string = ''; 

  constructor(private urlShortnerService: UrlShortnerService) {}

  redirectToOriginalUrl(event: Event) {
    event.preventDefault(); 

    if (!this.shortUrl) return;

    const shortCode = this.shortUrl.split('/').pop()!; 

    this.urlShortnerService.getOriginalUrl(shortCode).subscribe({
      next: response => {
        const newTab = window.open('', '_blank');
        if (newTab) {
          alert(response.originalUrl)
          newTab.location.href = response.originalUrl; 
        } else {
          alert('Please allow pop-ups to open the link.');
        }
      },
      error: (err: HttpErrorResponse) => { 
        console.error('Error fetching original URL:', err);
        alert('Invalid or expired short URL.');
      }
    });
  }
}
