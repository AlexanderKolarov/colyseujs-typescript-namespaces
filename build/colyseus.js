/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var Client = /** @class */ (function () {
        function Client(url) {
            this.onOpen = new Colyseus.Signal();
            this.onMessage = new Colyseus.Signal();
            this.onClose = new Colyseus.Signal();
            this.onError = new Colyseus.Signal();
            this.rooms = {};
            this.connectingRooms = {};
            this.requestId = 0;
            this.roomsAvailableRequests = {};
        }
        Client.prototype.join = function (roomName, options) {
            if (options === void 0) { options = {}; }
        };
        Client.prototype.getAvailableRooms = function (roomName, callback) {
        };
        Client.prototype.close = function (colyseusId) {
        };
        return Client;
    }());
    Colyseus.Client = Client;
})(Colyseus || (Colyseus = {}));
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var Clock = /** @class */ (function () {
        function Clock(useInterval) {
        }
        Clock.prototype.start = function (useInterval) { };
        Clock.prototype.stop = function () { };
        Clock.prototype.tick = function (newTime) { };
        return Clock;
    }());
    Colyseus.Clock = Clock;
})(Colyseus || (Colyseus = {}));
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var Connection = /** @class */ (function () {
        function Connection(url, querry) {
            if (querry === void 0) { querry = {}; }
        }
        Connection.prototype.onOpenCallback = function (even) {
        };
        Connection.prototype.onCloseCallback = function (even) {
        };
        Connection.prototype.send = function (data) {
        };
        return Connection;
    }());
    Colyseus.Connection = Connection;
})(Colyseus || (Colyseus = {}));
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var Protocol;
    (function (Protocol) {
        Protocol[Protocol["USER_ID"] = 1] = "USER_ID";
        // Room-related (10~20)
        Protocol[Protocol["JOIN_ROOM"] = 10] = "JOIN_ROOM";
        Protocol[Protocol["JOIN_ERROR"] = 11] = "JOIN_ERROR";
        Protocol[Protocol["LEAVE_ROOM"] = 12] = "LEAVE_ROOM";
        Protocol[Protocol["ROOM_DATA"] = 13] = "ROOM_DATA";
        Protocol[Protocol["ROOM_STATE"] = 14] = "ROOM_STATE";
        Protocol[Protocol["ROOM_STATE_PATCH"] = 15] = "ROOM_STATE_PATCH";
        // Match-making related (20~29)
        Protocol[Protocol["ROOM_LIST"] = 20] = "ROOM_LIST";
        // Generic messages (50~60)
        Protocol[Protocol["BAD_REQUEST"] = 50] = "BAD_REQUEST";
        // Utils (100~127)
        Protocol[Protocol["PING"] = 100] = "PING";
    })(Protocol = Colyseus.Protocol || (Colyseus.Protocol = {}));
})(Colyseus || (Colyseus = {}));
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var Signal = /** @class */ (function () {
        function Signal() {
        }
        Signal.prototype.add = function (listener) {
            return null;
        };
        return Signal;
    }());
    Colyseus.Signal = Signal;
})(Colyseus || (Colyseus = {}));
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var Slot = /** @class */ (function () {
        function Slot() {
        }
        Slot.prototype.execute0 = function () {
        };
        ;
        Slot.prototype.execute1 = function (value) {
        };
        Slot.prototype.execute = function (valueObjects) {
        };
        Slot.prototype.toString = function () {
            return null;
        };
        Slot.prototype.remove = function () {
        };
        Slot.prototype.verifyListener = function (listener) {
        };
        return Slot;
    }());
    Colyseus.Slot = Slot;
})(Colyseus || (Colyseus = {}));
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var StateContainer = /** @class */ (function () {
        function StateContainer(state) {
        }
        StateContainer.prototype.set = function (newState) {
        };
        StateContainer.prototype.registerPlaceholder = function (placeholder, matcher) {
        };
        StateContainer.prototype.listen = function (segments, callback) {
        };
        StateContainer.prototype.removeListener = function (listener) {
        };
        StateContainer.prototype.removeAllListeners = function () {
        };
        return StateContainer;
    }());
    Colyseus.StateContainer = StateContainer;
})(Colyseus || (Colyseus = {}));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="StateContainer.ts"/>
/**
 ** Created by Alexander Kolarov, on 6.5.2018 г.
 **/
var Colyseus;
(function (Colyseus) {
    var Room = /** @class */ (function (_super) {
        __extends(Room, _super);
        function Room(name, options) {
            var _this = _super.call(this, {}) || this;
            _this.clock = new Colyseus.Clock(); // experimental
            _this.remoteClock = new Colyseus.Clock(); // experimental
            // Public signals
            _this.onJoin = new Colyseus.Signal();
            _this.onStateChange = new Colyseus.Signal();
            _this.onMessage = new Colyseus.Signal();
            _this.onError = new Colyseus.Signal();
            _this.onLeave = new Colyseus.Signal();
            return _this;
        }
        Room.prototype.connect = function (connection) {
        };
        Room.prototype.leave = function () {
        };
        Room.prototype.send = function (data) {
        };
        Room.prototype.removeAllListeners = function () {
        };
        Room.prototype.onMessageCallback = function (event) {
        };
        Room.prototype.setState = function (encodedState, remoteCurrentTime, remoteElapsedTime) {
        };
        Room.prototype.patch = function (binaryPatch) {
        };
        return Room;
    }(Colyseus.StateContainer));
    Colyseus.Room = Room;
})(Colyseus || (Colyseus = {}));
//# sourceMappingURL=colyseus.js.map