import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  description = 'Đây là trang liên hệ';
  email = 'example@example.com';
}
