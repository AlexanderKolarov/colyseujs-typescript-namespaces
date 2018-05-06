/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
namespace Colyseus {

    export class Slot {

        protected _signal;
        protected _enabled: boolean;
        protected _listener: Function;
        protected _once: boolean;
        protected _priority: number;
        protected _params: any[];

        execute0(): void {
        };

        execute1(value: any): void {
        }

        execute(valueObjects: any[]): void {
        }

        listener: Function;
        readonly once: boolean;
        readonly priority: number;

        toString(): string {
            return null
        }

        enabled: boolean;
        params: any[];

        remove(): void {
        }

        protected verifyListener(listener: Function) {
        }

    }
}