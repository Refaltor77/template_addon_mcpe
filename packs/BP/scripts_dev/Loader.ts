import Init from "./framework/Init";
import {EVENTS} from "./framework/events/EventList";
import {onBreak} from "./events/onBreak";

export default class Loader extends Init
{
    public onStart(): void
    {
        // function to register events and cmd
        this.getEventManager().registerEvent(EVENTS.playerBreakBlock, new onBreak());
    }
}