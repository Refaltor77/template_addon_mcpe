import Listener from "../framework/events/Listener";
import Loader from "../Loader";
import EntityExplodeEvent from "../framework/events/types/entity/EntityExplodeEvent";

export class onExplode extends Listener
{
    onEvent(event: EntityExplodeEvent, loader: Loader): void
    {
        event.cancel(true);
    }
}