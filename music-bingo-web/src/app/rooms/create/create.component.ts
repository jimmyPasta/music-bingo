import { Component } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { Room } from '../room';
import { GameService } from 'src/app/games/game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  name = '';

  constructor(
    private readonly router: Router,
    private readonly gameService: GameService,
    private readonly roomService: RoomService
  ) {}

  onSubmit() {
    this.roomService.createRoom(this.name).subscribe((room: Room) => {
      this.gameService.createNewRoom(room, true);
      this.router.navigate(['/rooms/', room.key]);
    });
  }
}
