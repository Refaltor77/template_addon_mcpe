import Listener from "../framework/events/Listener";
import PlayerBreakBlock from "../framework/events/types/PlayerBreakBlock";

export class onBreak extends Listener
{
    onEvent(event: PlayerBreakBlock)
    {
        const player = event.getPlayer();
        player.sendMessage("Hello EasyAddon ! EVENT: PlayerBreakBlock");
    }
}