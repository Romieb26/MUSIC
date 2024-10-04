import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Song {
  id: number;
  nombre_album: string;
  contenido: string;
  anio_lanzamiento: number;
  artista: string;
  duracion: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  songs: Song[] = [];
  songForm: FormGroup;
  editMode: boolean = false;

  private apiUrl = 'http://localhost:3000/api/canciones'; // Cambia a la URL de tu API

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.songForm = this.fb.group({
      id: [null],
      nombre_album: [''],
      contenido: [''],
      anio_lanzamiento: [null],
      artista: [''],
      duracion: ['']
    });
  }

  ngOnInit() {
    this.fetchSongs();
  }

  fetchSongs() {
    this.http.get<Song[]>(this.apiUrl).subscribe(data => {
      this.songs = data;
    });
  }

  onSubmit() {
    const songData = this.songForm.value;

    if (this.editMode && songData.id) {
      this.http.put(`${this.apiUrl}/${songData.id}`, songData)
        .subscribe(() => {
          this.fetchSongs();
          this.resetForm();
        });
    } else {
      this.http.post(this.apiUrl, songData)
        .subscribe(() => {
          this.fetchSongs();
          this.resetForm();
        });
    }
  }

  editSong(song: Song) {
    this.songForm.patchValue(song);
    this.editMode = true;
  }

  deleteSong(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`)
      .subscribe(() => {
        this.fetchSongs();
      });
  }

  resetForm() {
    this.songForm.reset();
    this.editMode = false;
  }
}
