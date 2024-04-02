import Init from "./framework/Init";
import {EVENTS} from "./framework/events/EventList";
import {onJoin} from "./events/onJoin";

export default class Loader extends Init
{
    public onStart(): void
    {
        // function to register events and cmd
        this.registerEvent(EVENTS.playerJoinEvent, new onJoin());
    }
}