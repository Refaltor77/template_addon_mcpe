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
    Entity,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {WorldAddon} from "../../../world/WorldAddon";

export default class ButtonPushEvent extends Event
{
    private readonly source: Entity;
    private readonly block: Block;
    private readonly world: WorldAddon;

    constructor(source: Entity, block: Block, world: WorldAddon)
    {
        super();
        this.source = source;
        this.block = block;
    }

    public getEntity(): Entity {return this.source;}
    public getBlock(): Block {return this.block;}
    public getWorld(): WorldAddon {return this.world;}

    getEventName(): string {
        return EVENTS.buttonPushEvent;
    }
}