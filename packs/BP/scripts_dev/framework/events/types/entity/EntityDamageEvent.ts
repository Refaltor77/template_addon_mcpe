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

import {Entity, EntityDamageSource} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export class EntityDamageEvent extends Event
{
    private readonly entity: Entity;
    private readonly cause: EntityDamageSource;
    private readonly damageCount: number;

    constructor(entity: Entity, damage: EntityDamageSource, damageCount: number)
    {
        super();
        this.entity = entity;
        this.cause = damage;
        this.damageCount = damageCount;
    }

    public getEntity(): Entity {return this.entity;}
    public getCause(): EntityDamageSource {return this.cause;}
    public getDamage(): number {return this.damageCount;}

    getEventName(): string {
        return EVENTS.entityDamageEvent;
    }
}