import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-songs',  // Cambia el selector a 'app-song-card'
  standalone: true,
  imports: [HttpClientModule, CommonModule], 
  templateUrl: './songs.component.html',  // Cambia el nombre del archivo HTML
  styleUrls: ['./songs.component.css']  // Cambia el nombre del archivo CSS
})
export class SongsComponent implements OnInit {  // Cambia el nombre de la clase a 'SongCardComponent'
  songs: any[] = [];  // Cambia el nombre de la variable a 'songs'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchSongs();  // Cambia el nombre del método a 'fetchSongs'
  }

  fetchSongs() {
    this.http.get<any[]>('http://localhost:3000/api/canciones')  // Cambia la URL a la nueva API de canciones
      .subscribe(
        (data) => {
          console.log(data);
          this.songs = data;  // Asigna los datos a 'songs'
        },
        (error) => {
          console.error('Error fetching songs:', error);  // Cambia el mensaje de error
        }
      );
  }
}