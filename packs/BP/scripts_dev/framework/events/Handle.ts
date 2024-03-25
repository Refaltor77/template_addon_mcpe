import {Block, Dimension, system, Vector3, world} from "@minecraft/server";
import {HandlerListManager} from "./HandlerListManager";
import {EVENTS} from "./EventList";
import BlockBreakEvent from "./types/block/BlockBreakEvent";
import PlayerJoinEvent from "./types/player/PlayerJoinEvent";
import Loader from "../../Loader";
import PlayerQuitEvent from "./types/player/PlayerQuitEvent";
import PlayerInteractEvent from "./types/player/PlayerInteractEvent";
import BlockPlaceEvent from "./types/block/BlockPlaceEvent";
import {COMMANDS} from "../commands/CommandList";

export class Handle
{
    public handleAllEvents(manager: HandlerListManager, loader: Loader): void
    {
        world.beforeEvents.playerBreakBlock.subscribe(event =>
        {
            const eventName: string = EVENTS.blockBreakEvent;
            const eventObject: BlockBreakEvent = new BlockBreakEvent(
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

        world.afterEvents.playerPlaceBlock.subscribe(event =>
        {
            const eventName: string = EVENTS.blockPlaceEvent;
            const eventObject: BlockPlaceEvent = new BlockPlaceEvent(
                event.player,
                event.block,
                event.dimension
            );
            manager.callEvent(eventName, eventObject, loader);

            // create canceller because Mojang has not implemented this method in BlockPlace
            if (eventObject.isCancel)
            {
                const block: Block = event.block;
                const world: Dimension = event.dimension;
                const blockTarget: Block = world.getBlock(block.location);
                if (blockTarget.isValid() && !blockTarget.isAir)
                {
                    const location: Vector3 = block.location;
                    world.runCommand(`setblock ${location.x.toString()} ${location.y.toString()} ${location.z.toString()} air [] replace`);
                }
            }
        });
    }
}