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
    Block, Dimension,
    Effect,
    Entity, EntityInitializationCause, Player,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {WorldAddon} from "../../../world/WorldAddon";

export default class EntitySpawnEvent extends Event
{
    private readonly entity: Entity;
    private readonly cause: EntityInitializationCause;

    constructor(entity: Entity, cause: EntityInitializationCause)
    {
        super();
        this.entity = entity;
        this.cause = cause;
    }

    public getEntity(): Entity {return this.entity;}
    public getCause(): EntityInitializationCause {return this.cause;}


    getEventName(): string {
        return EVENTS.entitySpawnEvent;
    }
}