/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
namespace Colyseus {

    export class Clock {

        running: boolean;
        deltaTime: number;
        currentTime: number;
        elapsedTime: number;
        protected now: Function;
        protected _interval: any;
        constructor(useInterval?: boolean){}
        start(useInterval?: boolean): void{}
        stop(): void{}
        tick(newTime?: any): void{}

    }
}