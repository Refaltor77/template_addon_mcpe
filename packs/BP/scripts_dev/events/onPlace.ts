import Listener from "../framework/events/Listener";
import BlockPlaceEvent from "../framework/events/types/block/BlockPlaceEvent";
import Loader from "../Loader";

export class onPlace extends Listener
{
    onEvent(event: BlockPlaceEvent, loader: Loader)
    {
        const player = event.getPlayer();
        event.cancel(true);
        player.sendMessage("no place :)");
    }
}