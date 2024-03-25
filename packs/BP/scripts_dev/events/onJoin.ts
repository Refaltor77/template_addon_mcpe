import Listener from "../framework/events/Listener";
import PlayerJoinEvent from "../framework/events/types/player/PlayerJoinEvent";
import Loader from "../Loader";
import {Database} from "../framework/database/Database";

export class onJoin extends Listener
{
    onEvent(event: PlayerJoinEvent, loader: Loader): void
    {
        const database = new Database("test", true);
        const player = event.getPlayer();

        let join: number = 0;
        if (database.has(player.id + ":join")) join = <number>database.get(player.id + ":join");
        join++;
        database.set(player.id + ":join", join);
        if (event.hasPlayedBefore())
        {
            player.sendMessage("You have played before ! Join : " + join);
        }
        else
        {
            player.sendMessage("Welcome new player !");
        }
    }
}