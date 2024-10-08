import { Component } from '@angular/core';
import { AlbumComponent } from "../album/album.component";
import { FooterComponent } from "../footer/footer.component";
import { SongsComponent } from "../songs/songs.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AlbumComponent, FooterComponent, SongsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
