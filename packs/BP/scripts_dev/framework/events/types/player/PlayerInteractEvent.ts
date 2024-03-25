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
    Block,
    Direction,
    ItemStack,
    ItemUseOnBeforeEvent,
    Player,
    Vector3
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class PlayerInteractEvent extends Event
{
    private readonly player: Player;
    private readonly block: Block;
    private readonly face: Direction;
    private readonly item: ItemStack;
    private readonly faceLocation: Vector3;
    private readonly event: ItemUseOnBeforeEvent;

    constructor(player: Player, block: Block, itemStack: ItemStack, face: Direction, faceLocation: Vector3, event: ItemUseOnBeforeEvent)
    {
        super();
        this.player = player;
        this.block = block;
        this.item = itemStack;
        this.event = event;
        this.face = face;
        this.faceLocation = faceLocation;
    }

    public getPlayer(): Player {return this.player;}
    public getBlock(): Block {return this.block;}
    public getItem(): ItemStack {return this.item};
    public getFace(): Direction {return this.face;}
    public getFaceLocation(): Vector3 {return this.faceLocation;}

    // for cancel event
    public cancel(value: boolean): void {
        this.event.cancel = value;
    }

    getEventName(): string {
        return EVENTS.playerInteractEvent;
    }
}