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
    Direction,
    ItemStack,
    ItemUseOnBeforeEvent,
    Player,
    Vector3
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {PPlayer} from "../../../player/PPlayer";
import {WorldAddon} from "../../../world/WorldAddon";

export default class BlockPlaceEvent extends Event
{
    private readonly player: PPlayer;
    private readonly block: Block;
    private readonly world: WorldAddon;
    public isCancel: boolean = false;

    constructor(player: PPlayer, block: Block, world: WorldAddon)
    {
        super();
        this.player = player;
        this.block = block;
    }

    public getPlayer(): PPlayer {return this.player;}
    public getBlock(): Block {return this.block;}
    public getWorld(): WorldAddon {return this.world;}

    // for cancel event
    public cancel(value: boolean): void {
        this.isCancel = value;
    }

    getEventName(): string {
        return EVENTS.blockPlaceEvent;
    }

    public isCancellable(): boolean {
        return true;
    }
}