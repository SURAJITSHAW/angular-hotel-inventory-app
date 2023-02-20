import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';

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

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe",
      price: 1000,
      checkInTime: new Date("20-02-2023")
    },
    {
      roomNumber: 2,
      roomType: "Suties",
      price: 2000,
      checkInTime: new Date("20-Feb-2023")
    },
    {
      roomNumber: 3,
      roomType: "Standard",
      price: 500,
      checkInTime: new Date("20-Feb-2023")
    }
  ];

  toggle(): void {
    this.hidden = !this.hidden;
  }
}
