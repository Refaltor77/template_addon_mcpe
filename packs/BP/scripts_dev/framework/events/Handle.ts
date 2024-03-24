import {world} from "@minecraft/server";
import {HandlerListManager} from "./HandlerListManager";
import {EVENTS} from "./EventList";
import PlayerBreakBlock from "./types/PlayerBreakBlock";
import PlayerJoinEvent from "./types/PlayerJoinEvent";
import Loader from "../../Loader";

export class Handle
{
    public handleAllEvents(manager: HandlerListManager, loader: Loader): void
    {
        world.beforeEvents.playerBreakBlock.subscribe(event =>
        {
            const eventName: string = EVENTS.playerBreakBlock;
            const eventObject: PlayerBreakBlock = new PlayerBreakBlock(
                event.player,
                event.block,
                event.dimension,
                event.itemStack,
                event
            );

            manager.callEvent(eventName, eventObject, loader);
        });

        world.afterEvents.playerSpawn.subscribe(event =>
        {
            const eventName: string = EVENTS.playerJoinEvent;
            const eventObject: PlayerJoinEvent = new PlayerJoinEvent(
                event.player,
                event.initialSpawn
            );

            manager.callEvent(eventName, eventObject, loader);
        });
    }
}