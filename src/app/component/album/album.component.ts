import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-album',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  albums = [
    { nombre_album: 'Balas perdidas', contenido: '12 canciones', anio_lanzamiento: 2018, artista: 'Morat', duracion: 45 },
    { nombre_album: 'Beauty Behind the Madness', contenido: '14 canciones', anio_lanzamiento: 2015, artista: 'The weeknd', duracion: 40 },
    { nombre_album: 'Alfa & Omega', contenido: '12 canciones', anio_lanzamiento: 2022, artista: 'Alfredo olivas', duracion: 50 },
    { nombre_album: 'Nadie sabe lo que va a pasar mañana', contenido: '22 canciones', anio_lanzamiento: 2023, artista: 'Bad bunny', duracion: 45 },
    { nombre_album: 'Otra  Órbita', contenido: '9 canciones', anio_lanzamiento: 2018, artista: 'Mario Bautista', duracion: 40 },
    { nombre_album: 'K.O', contenido: '11 canciones', anio_lanzamiento: 2021, artista: 'Danna paola', duracion: 50 },
    { nombre_album: 'After Hours', contenido: '14 canciones', anio_lanzamiento: 2020, artista: 'the weenkd', duracion: 45 },
    { nombre_album: 'Cuatro y Tres', contenido: '15 canciones', anio_lanzamiento: 2023, artista: 'Chucho Rivas', duracion: 40 },
    { nombre_album: 'Homerun', contenido: '18 canciones', anio_lanzamiento: 2019, artista: 'Paulo londra', duracion: 40 },
    { nombre_album: 'Starboy', contenido: '18 canciones', anio_lanzamiento: 2016, artista: 'The weeknd', duracion: 50 },
    { nombre_album: 'The Eminem Show', contenido: '20 canciones', anio_lanzamiento: 2002, artista: 'Eminem', duracion: 50 },
    { nombre_album: 'De Hoy En Adelante Que Te Vaya Bien', contenido: '12 canciones', anio_lanzamiento: 2022, artista: 'Julión Álvarez ', duracion: 50 }   
  ];
}
