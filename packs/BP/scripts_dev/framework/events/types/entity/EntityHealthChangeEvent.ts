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

export default class EntityHealthChangeEvent extends Event
{
    private readonly entity: Entity;
    private readonly newValue: number;
    private readonly oldValue: number;

    constructor(entity: Entity, newValue: number, oldValue: number)
    {
        super();
        this.entity = entity;
        this.newValue = newValue;
        this.oldValue = oldValue;
    }

    public getEntity(): Entity {return this.entity;}
    public getNewValue(): number {return this.newValue;}
    public getOldValue(): number {return this.oldValue;}


    getEventName(): string {
        return EVENTS.entityHealthChangeEvent;
    }

    isCancellable(): boolean {
        return false;
    }
}