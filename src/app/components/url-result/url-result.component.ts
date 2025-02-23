import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-result.component.html',
  styleUrls: ['./url-result.component.css']
})
export class UrlResultComponent {
  @Input() shortUrl: string = ''; 
}

