import Init from "./framework/Init";
import {EVENTS} from "./framework/events/EventList";
import {onBreak} from "./events/onBreak";
import {onExplode} from "./events/onExplode";

export default class Loader extends Init
{
    public onStart(): void
    {
        // function to register events and cmd
        this.registerEvent(EVENTS.blockBreakEvent, new onBreak());
    }

}