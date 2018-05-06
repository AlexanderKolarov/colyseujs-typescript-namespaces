///<reference path="StateContainer.ts"/>
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
namespace Colyseus {

    export class Room<T=any> extends StateContainer {

        public id: string;
        public sessionId: string;

        public name: string;
        public options: any;

        public clock: Clock = new Clock(); // experimental
        public remoteClock: Clock = new Clock(); // experimental

        // Public signals
        public onJoin: Signal = new Signal();
        public onStateChange: Signal = new Signal();
        public onMessage: Signal = new Signal();
        public onError: Signal = new Signal();
        public onLeave: Signal = new Signal();

        public connection: Connection;

        constructor(name: string, options?: any) {
            super({});
        }

        public connect(connection: Connection) {

        }

        public leave(): void {

        }

        public send(data): void {

        }

        public removeAllListeners() {

        }

        protected onMessageCallback(event) {

        }

        protected setState( encodedState, remoteCurrentTime?: number, remoteElapsedTime?: number ): void {

        }

        protected patch( binaryPatch ) {

        }

    }

    export interface RoomAvailable {
        roomId: string;
        clients: number;
        maxClients: number;
        metadata?: any;
    }
}