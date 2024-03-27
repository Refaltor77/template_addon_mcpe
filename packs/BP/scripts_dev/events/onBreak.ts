import Listener from "../framework/events/Listener";
import BlockBreakEvent from "../framework/events/types/block/BlockBreakEvent";
import Loader from "../Loader";
import {PPlayer} from "../framework/player/PPlayer";

export class onBreak extends Listener
{
    onEvent(event: BlockBreakEvent, loader: Loader)
    {
        const player: PPlayer = event.getPlayer();
        player.getInventory().clearAll();
    }
}