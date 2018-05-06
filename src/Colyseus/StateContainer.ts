/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
namespace Colyseus {

    export class StateContainer<T=any> {
        state: T;

        constructor(state: T) {
        }

        set(newState: T) {
        }

        registerPlaceholder(placeholder: string, matcher: RegExp): void {
        }

        listen(segments: string | Function, callback?: Function) {
        }

        removeListener(listener): void {
        }

        removeAllListeners(): void {
        }
    }
}