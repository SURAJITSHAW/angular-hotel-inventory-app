import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = 'Shaw Hotels';
  numberOfRooms: number = 15;
  hidden: boolean = false;

  toggle(): void {
    this.hidden = !this.hidden;
  }
}
