import {world} from "@minecraft/server";
import {HandlerListManager} from "./HandlerListManager";
import {EVENTS} from "./EventList";
import PlayerBreakBlock from "./types/PlayerBreakBlock";

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
    }
}