import Listener from "../framework/events/Listener";
import PlayerJoinEvent from "../framework/events/types/player/PlayerJoinEvent";
import Loader from "../Loader";

export class onJoin extends Listener
{
    onEvent(event: PlayerJoinEvent, loader: Loader): void
    {
        const player = event.getPlayer();

        if (event.hasPlayedBefore())
        {
            player.sendMessage("You have played before !");
        }
        else
        {
            player.sendMessage("Welcome new player !");
        }
    }
}