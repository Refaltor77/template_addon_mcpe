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

import {Block, Dimension, ItemStack, Player, PlayerBreakBlockBeforeEvent} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {PPlayer} from "../../../player/PPlayer";

export default class BlockBreakEvent extends Event
{
    private readonly player: PPlayer;
    private readonly block: Block;
    private readonly world: Dimension;
    private readonly item: ItemStack;
    private readonly event: PlayerBreakBlockBeforeEvent;

    constructor(player: PPlayer, block: Block, world: Dimension, itemStack: ItemStack, event: PlayerBreakBlockBeforeEvent)
    {
        super();
        this.player = player;
        this.block = block;
        this.world = world;
        this.item = itemStack;
        this.event = event;
    }

    public getPlayer(): PPlayer {return this.player;}
    public getBlock(): Block {return this.block;}
    public getWorld(): Dimension {return this.world;}
    public getItem(): ItemStack {return this.item};

    // for cancel event
    public cancel(value: boolean): void {
        this.event.cancel = value;
    }

    public getEventName(): string {
        return EVENTS.blockBreakEvent;
    }

    public isCancellable(): boolean {
        return true;
    }
}