import Init from "./framework/Init";
import {EVENTS} from "./framework/events/EventList";
import {onBreak} from "./events/onBreak";
import {onJoin} from "./events/onJoin";
import {onPlace} from "./events/onPlace";

export default class Loader extends Init
{
    public onStart(): void
    {
        // function to register events and cmd
        this.getEventManager().registerEvent(EVENTS.blockBreakEvent, new onBreak());
        this.getEventManager().registerEvent(EVENTS.blockPlaceEvent, new onPlace());
        this.getEventManager().registerEvent(EVENTS.playerJoinEvent, new onJoin());
    }
}