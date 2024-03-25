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
    Effect,
    Entity,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class EntityAddEffectEvent extends Event
{
    private readonly entity: Entity;
    private readonly effect: Effect;

    constructor(entity: Entity, effect: Effect)
    {
        super();
        this.entity = entity;
        this.effect = effect;
    }

    public getEntity(): Entity {return this.entity;}
    public getEffect(): Effect {return this.effect;}



    getEventName(): string {
        return EVENTS.entityAddEffectEvent;
    }

    isCancellable(): boolean {
        return true;
    }
}