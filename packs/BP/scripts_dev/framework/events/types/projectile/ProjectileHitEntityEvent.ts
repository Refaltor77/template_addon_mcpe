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

import {
    Dimension,
    Direction,
    Entity,
    EntityDamageSource,
    EntityHitInformation,
    Player,
    Vector3
} from "@minecraft/server";
import {World} from "../../../world/World";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export class ProjectileHitEntityEvent extends Event
{
    private readonly world: Dimension;
    private readonly projectile: Entity;
    private readonly entityHitPos: Vector3;
    private readonly entityHitInformation: EntityHitInformation;
    private readonly posHit: Vector3;
    private readonly source: Entity|undefined;

    constructor(
        world: Dimension,
        projectile: Entity,
        entityHitPos: Vector3,
        entityHitInformation: EntityHitInformation,
        posHit: Vector3,
        launcher?: Entity
    )
    {
        super();
        this.world = world;
        this.projectile = projectile;
        this.entityHitPos = entityHitPos;
        this.entityHitInformation = entityHitInformation;
        this.posHit = posHit;
        this.source = launcher;
    }

    public getWorld(): World {return new World(this.world);}
    public getProjectile(): Entity {return this.projectile;}
    public getDirectionVector(): Vector3 {return this.entityHitPos;}
    public getHitPosition(): Vector3 {return this.posHit;}

    public getSource(): Entity|undefined {
        return this.source;
    }

    public entityIsValid(): boolean {
        return (!this.entityHitInformation.entity === undefined);
    }

    public getEntityHit(): Entity {
        return this.entityHitInformation.entity;
    }

    getEventName(): string {
        return EVENTS.projectileHitEntityEvent;
    }
}