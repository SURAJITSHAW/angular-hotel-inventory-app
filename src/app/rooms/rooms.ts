export interface Rooms {
    totalRoom: number;
    availableRoom: number;
    occupiedRoom: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    price: number;
    checkInTime: Date;
}