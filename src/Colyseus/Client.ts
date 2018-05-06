/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
namespace Colyseus {

    export class Client {

        id?: string;

        onOpen: Signal = new Signal();
        onMessage: Signal = new Signal();
        onClose: Signal = new Signal();
        onError: Signal = new Signal();

        protected connection: Connection;

        protected rooms: { [id: string]: Room } = {};
        protected connectingRooms: { [id: string]: Room } = {};
        protected requestId = 0;

        protected hostname: string;
        protected storage: Storage;

        protected roomsAvailableRequests: { [requestId: number]: (value?: RoomAvailable[]) => void } = {};


        constructor(url: string) {

        }

        join<T>(roomName: string, options: any = {}): void {
        }

        getAvailableRooms(roomName: string, callback: (rooms: RoomAvailable[], err?: string) => void) {

        }

        close(colyseusId: string): void {

        }

    }


}