import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  playSound() {
    let audio = new Audio();
    audio.src = "assets/sound/Button.mp3";
    audio.load();
    audio.play();
  }

}
