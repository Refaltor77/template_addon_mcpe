import Listener from "../framework/events/Listener";
import PlayerBreakBlock from "../framework/events/types/PlayerBreakBlock";
import Loader from "../Loader";

export class onBreak extends Listener
{
    onEvent(event: PlayerBreakBlock, loader: Loader)
    {
        const player = event.getPlayer();
        player.sendMessage("Hello EasyAddon ! EVENT: PlayerBreakBlock");
        event.cancel(true);

        loader.getWorld().broadcastMessage("§aHello EasyAddon !");
        loader.getWorld().broadcastMessage("§aHello EasyAddon !", "§c[easyaddon]");
    }
}