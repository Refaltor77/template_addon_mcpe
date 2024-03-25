import {Block, Dimension, Player, Vector3, world} from "@minecraft/server";
import BlockBreakEvent from "./types/block/BlockBreakEvent";
import PlayerJoinEvent from "./types/player/PlayerJoinEvent";
import Loader from "../../Loader";
import PlayerQuitEvent from "./types/player/PlayerQuitEvent";
import PlayerInteractEvent from "./types/player/PlayerInteractEvent";
import BlockPlaceEvent from "./types/block/BlockPlaceEvent";
import EntityDeathEvent from "./types/entity/EntityDeathEvent";
import {PlayerDeathEvent} from "./types/player/PlayerDeathEvent";
import {PlayerChangeWorldEvent} from "./types/player/PlayerChangeWorldEvent";
import {PlayerDamageEvent} from "./types/player/PlayerDamageEvent";
import {EntityDamageEvent} from "./types/entity/EntityDamageEvent";
import {ProjectileHitEntityEvent} from "./types/projectile/ProjectileHitEntityEvent";
import ButtonPushEvent from "./types/block/ButtonPushEvent";
import EntityAddEffectEvent from "./types/entity/EntityAddEffectEvent";

export class Handle
{
    public handleAllEvents(loader: Loader): void
    {
        world.beforeEvents.playerBreakBlock.subscribe(event =>
        {
            const eventObject: BlockBreakEvent = new BlockBreakEvent(
                event.player,
                event.block,
                event.dimension,
                event.itemStack,
                event
            );

            eventObject.call();
        });

        world.afterEvents.playerSpawn.subscribe(event =>
        {
            const eventObject: PlayerJoinEvent = new PlayerJoinEvent(
                event.player,
                event.initialSpawn
            );
            eventObject.call();
        });

        world.beforeEvents.playerLeave.subscribe(event =>
        {
            const eventObject: PlayerQuitEvent = new PlayerQuitEvent(
                event.player
            );
            eventObject.call();
        });

        world.beforeEvents.itemUseOn.subscribe(event =>
        {
            const eventObject: PlayerInteractEvent = new PlayerInteractEvent(
                event.source,
                event.block,
                event.itemStack,
                event.blockFace,
                event.faceLocation,
                event
            );
            eventObject.call();
        });

        world.afterEvents.playerPlaceBlock.subscribe(event =>
        {
            const eventObject: BlockPlaceEvent = new BlockPlaceEvent(
                event.player,
                event.block,
                event.dimension
            );
            eventObject.call();

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

        world.afterEvents.entityDie.subscribe(event => {
            const eventObject: EntityDeathEvent = new EntityDeathEvent(
                event.deadEntity,
                event.damageSource
            );
            eventObject.call();

            const deadEntity = event.deadEntity;
            if (deadEntity instanceof Player)
            {
                const eventObjectPlayer: PlayerDeathEvent = new PlayerDeathEvent(
                    deadEntity,
                    event.damageSource
                );
                eventObjectPlayer.call();
            }
        });

        world.afterEvents.playerDimensionChange.subscribe(event =>
        {
            const eventObject: PlayerChangeWorldEvent = new PlayerChangeWorldEvent(
                event.player,
                event.fromDimension,
                event.toDimension,
                event.fromLocation,
                event.toLocation
            );
            eventObject.call();
        });

        world.afterEvents.entityHurt.subscribe(event =>
        {
            const entity = event.hurtEntity;
            const eventObject: EntityDamageEvent = new EntityDamageEvent(
                entity,
                event.damageSource,
                event.damage,
            );
            eventObject.call();

            if (entity instanceof Player)
            {
                const eventObjectPlayer: PlayerDamageEvent = new PlayerDamageEvent(
                    entity,
                    event.damageSource,
                    event.damage,
                );
                eventObjectPlayer.call();
            }
        });

        world.afterEvents.projectileHitEntity.subscribe(event =>
        {
            const eventObject: ProjectileHitEntityEvent = new ProjectileHitEntityEvent(
                event.dimension,
                event.projectile,
                event.hitVector,
                event.getEntityHit(),
                event.location,
                event.source
            );
            if (eventObject.entityIsValid()) {
                eventObject.call();
            }
        });


        world.afterEvents.buttonPush.subscribe(event => {
            const eventObject: ButtonPushEvent = new ButtonPushEvent(
                event.source,
                event.block,
                event.dimension
            );
            eventObject.call();
        });


        world.afterEvents.effectAdd.subscribe(event =>
        {
            const eventObject: EntityAddEffectEvent = new EntityAddEffectEvent(
                event.entity,
                event.effect
            );
            eventObject.call();
            if (eventObject.isCancel)
            {
                eventObject.getEntity().removeEffect(
                    eventObject.getEffect().displayName.toLowerCase()
                );
            }
        });
    }
}