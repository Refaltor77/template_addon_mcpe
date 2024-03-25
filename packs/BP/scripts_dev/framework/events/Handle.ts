import {world} from "@minecraft/server";
import {HandlerListManager} from "./HandlerListManager";
import {EVENTS} from "./EventList";
import PlayerBreakBlock from "./types/PlayerBreakBlock";
import PlayerJoinEvent from "./types/PlayerJoinEvent";
import Loader from "../../Loader";
import PlayerQuitEvent from "./types/PlayerQuitEvent";
import PlayerInteractEvent from "./types/PlayerInteractEvent";

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

        world.beforeEvents.playerLeave.subscribe(event =>
        {
            const eventName: string = EVENTS.playerQuitEvent;
            const eventObject: PlayerQuitEvent = new PlayerQuitEvent(
                event.player
            );
            manager.callEvent(eventName, eventObject, loader);
        });

        world.beforeEvents.itemUseOn.subscribe(event =>
        {
            const eventName: string = EVENTS.playerInteractEvent;
            const eventObject: PlayerInteractEvent = new PlayerInteractEvent(
                event.source,
                event.block,
                event.itemStack,
                event.blockFace,
                event.faceLocation,
                event
            );
            manager.callEvent(eventName, eventObject, loader);
        });
    }
}