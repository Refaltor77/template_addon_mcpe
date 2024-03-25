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
    Entity, Player,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {World} from "../../../world/World";

export default class EntityExplodeEvent extends Event
{
    private readonly entity: Entity;
    private affectedBlocks: Block[];

    constructor(entity: Entity, affectedBlocks: Block[])
    {
        super();
        this.entity = entity;
        this.affectedBlocks = affectedBlocks;
    }

    public getEntity(): Entity {return this.entity;}
    public getAffectedBlocks(): Block[] {return this.affectedBlocks;}


    public setAffectedBlocks(blocks: Block[]): void {
        this.affectedBlocks = blocks;
    }

    getEventName(): string {
        return EVENTS.entityExplodeEvent;
    }

    isCancellable(): boolean {
        return true;
    }
}