import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(private router: Router) { }

navigateToHome() {
  this.router.navigate(['/home']);
}


  team1Score = 0;
  team2Score = 0;

  spaces = [
    { content: 'Respuesta 1', revealed: false },
    { content: 'Respuesta 2', revealed: false },
    { content: 'Respuesta 3', revealed: false },
    { content: 'Respuesta 4', revealed: false },
    { content: 'Respuesta 5', revealed: false },
    // ...agrega más espacios según sea necesario
  ];

  revealContent(index: number) {
    this.spaces[index].revealed = true;
  }

  increaseScore(team: 'team1' | 'team2') {
    if (team === 'team1') {
      this.team1Score += 100; // Incrementa en 100
    } else {
      this.team2Score += 100; // Incrementa en 100
    }
  }

  resetScore(team: 'team1' | 'team2') {
    if (team === 'team1') {
      this.team1Score = 0;
    } else {
      this.team2Score = 0;
    }
  }

  playSoundCorrect() {
    let audio = new Audio();
    audio.src = "assets/sound/Correct.mp3";
    audio.load();
    audio.play();
  }

  playSoundIncorrect() {
    let audio = new Audio();
    audio.src = "assets/sound/Incorrect.mp3";
    audio.load();
    audio.play();
  }

  playSoundTimer() {
    let audio = new Audio();
    audio.src = "assets/sound/Timer.mp3";
    audio.load();
    audio.play();

    // Establece la duración deseada en segundos
    let durationInSeconds = 10;

    // Establece un temporizador para detener la reproducción después de la duración deseada
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reinicia la posición de reproducción
    }, durationInSeconds * 1000); // Multiplica por 1000 para convertir a milisegundos
}

playSoundScore() {
  let audio = new Audio();
  audio.src = "assets/sound/Score.mp3";
  audio.load();
  audio.play();
}

playSoundDiscover() {
  let audio = new Audio();
  audio.src = "assets/sound/Discover.mp3";
  audio.load();
  audio.play();
}

}

