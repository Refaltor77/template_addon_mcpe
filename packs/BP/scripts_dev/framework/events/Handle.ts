/*
 *
 *  _____                   _       _     _
 * | ____|__ _ ___ _   _   / \   __| | __| | ___  _ __
 * |  _| / _` / __| | | | / _ \ / _` |/ _` |/ _ \| '_ \
 * | |__| (_| \__ \ |_| |/ ___ \ (_| | (_| | (_) | | | |
 * |_____\__,_|___/\__, /_/   \_\__,_|\__,_|\___/|_| |_|
 *                 |___/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * @author Refaltor77
 *
 *
 */

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
import PlayerAddEffectEvent from "./types/player/PlayerAddEffectEvent";
import EntityExplodeEvent from "./types/entity/EntityExplodeEvent";
import EntitySpawnEvent from "./types/entity/EntitySpawnEvent";
import {PPlayer} from "../player/PPlayer";
import EntityHealthChangeEvent from "./types/entity/EntityHealthChangeEvent";

export class Handle
{
    public handleAllEvents(loader: Loader): void
    {
        world.beforeEvents.playerBreakBlock.subscribe(event =>
        {
            const eventObject: BlockBreakEvent = new BlockBreakEvent(
                new PPlayer(event.player),
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
                new PPlayer(event.player),
                event.initialSpawn
            );
            eventObject.call();
        });

        world.beforeEvents.playerLeave.subscribe(event =>
        {
            const eventObject: PlayerQuitEvent = new PlayerQuitEvent(
                new PPlayer(event.player),
            );
            eventObject.call();
        });

        world.beforeEvents.itemUseOn.subscribe(event =>
        {
            const eventObject: PlayerInteractEvent = new PlayerInteractEvent(
                new PPlayer(event.source),
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
                new PPlayer(event.player),
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
                    new PPlayer(deadEntity),
                    event.damageSource
                );
                eventObjectPlayer.call();
            }
        });

        world.afterEvents.playerDimensionChange.subscribe(event =>
        {
            const eventObject: PlayerChangeWorldEvent = new PlayerChangeWorldEvent(
                new PPlayer(event.player),
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
                    new PPlayer(entity),
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
            else
            {
                if (event.entity instanceof Player)
                {
                    const eventObjectPlayer: PlayerAddEffectEvent = new PlayerAddEffectEvent(
                        new PPlayer(event.entity),
                        event.effect
                    );
                    eventObjectPlayer.call();
                    if (eventObjectPlayer.isCancel)
                    {
                        eventObjectPlayer.getPlayer().getRealPlayer().removeEffect(
                            eventObjectPlayer.getEffect().displayName.toLowerCase()
                        );
                    }
                }
            }
        });



        world.beforeEvents.explosion.subscribe(event =>
        {
            const eventObject: EntityExplodeEvent = new EntityExplodeEvent(
                event.source,
                event.getImpactedBlocks()
            );
            eventObject.call();
            event.setImpactedBlocks(eventObject.getAffectedBlocks());
            if (eventObject.isCancel)
            {
                event.cancel = true;
            }
        });

        world.afterEvents.entitySpawn.subscribe(event =>
        {
            const eventObject: EntitySpawnEvent = new EntitySpawnEvent(
                event.entity,
                event.cause
            );
            eventObject.call();
        });


        world.afterEvents.entityHealthChanged.subscribe(event =>
        {
            const eventObject = new EntityHealthChangeEvent(
                event.entity,
                event.newValue,
                event.oldValue
            );
            eventObject.call();
        });
    }
}