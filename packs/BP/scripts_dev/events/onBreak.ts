import Listener from "../framework/events/Listener";
import BlockBreakEvent from "../framework/events/types/block/BlockBreakEvent";
import Loader from "../Loader";

export class onBreak extends Listener
{
    onEvent(event: BlockBreakEvent, loader: Loader)
    {
        const player = event.getPlayer();
        player.sendMessage("Hello EasyAddon ! EVENT: PlayerBreakBlock");
        event.cancel(true);

        loader.getWorld().broadcastMessage("§aHello EasyAddon !");
        loader.getWorld().broadcastMessage("§aHello EasyAddon !", "§c[easyaddon]");
    }
}