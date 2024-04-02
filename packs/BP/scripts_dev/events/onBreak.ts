import Listener from "../framework/events/Listener";
import BlockBreakEvent from "../framework/events/types/block/BlockBreakEvent";
import Loader from "../Loader";
import {Creative} from "../framework/gamemodes/Creative";

export class onBreak extends Listener
{
    onEvent(event: BlockBreakEvent, loader: Loader)
    {
        const player = event.getPlayer();
        player.setGameMode(Creative.get());
    }
}