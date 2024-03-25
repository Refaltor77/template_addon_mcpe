import Init from "./framework/Init";
import {EVENTS} from "./framework/events/EventList";
import {onBreak} from "./events/onBreak";
import {onJoin} from "./events/onJoin";
import {onPlace} from "./events/onPlace";
import {HandlerListManager} from "./framework/events/HandlerListManager";
import {onButtonPush} from "./events/onButtonPush";

export default class Loader extends Init
{
    public onStart(): void
    {
        // function to register events and cmd
        this.registerEvent(EVENTS.blockBreakEvent, new onBreak());
        this.registerEvent(EVENTS.blockPlaceEvent, new onPlace());
        this.registerEvent(EVENTS.playerJoinEvent, new onJoin());
        this.registerEvent(EVENTS.buttonPushEvent, new onButtonPush());
    }
}