import { Component } from '@angular/core';
import { AlbumComponent } from "../album/album.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AlbumComponent, FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
