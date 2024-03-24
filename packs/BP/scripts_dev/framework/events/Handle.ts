import {world} from "@minecraft/server";
import {HandlerListManager} from "./HandlerListManager";
import {EVENTS} from "./EventList";
import PlayerBreakBlock from "./types/PlayerBreakBlock";
import PlayerJoinEvent from "./types/PlayerJoinEvent";

export class Handle
{
    public handleAllEvents(manager: HandlerListManager): void
    {
        world.afterEvents.playerBreakBlock.subscribe(event =>
        {
            const eventName: string = EVENTS.playerBreakBlock;
            const eventObject: PlayerBreakBlock = new PlayerBreakBlock(
                event.player,
                event.block,
                event.dimension,
                event.itemStackBeforeBreak,
                event.itemStackAfterBreak,
                event.brokenBlockPermutation
            );

            manager.callEvent(eventName, eventObject);
        });

        world.afterEvents.playerSpawn.subscribe(event =>
        {
            const eventName: string = EVENTS.playerJoinEvent;
            const eventObject: PlayerJoinEvent = new PlayerJoinEvent(
                event.player,
                event.initialSpawn
            );

            manager.callEvent(eventName, eventObject);
        });
    }
}