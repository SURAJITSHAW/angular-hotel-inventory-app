import { Component } from '@angular/core';
import { Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = 'Shaw Hotels';
  numberOfRooms: number = 15;
  hidden: boolean = false;

  rooms: Rooms = {
    totalRoom: 12,
    availableRoom: 10,
    occupiedRoom: 1
  }

  toggle(): void {
    this.hidden = !this.hidden;
  }
}
