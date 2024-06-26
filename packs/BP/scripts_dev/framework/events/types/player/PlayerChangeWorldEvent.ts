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

import {Dimension, Entity, Player, Vector3} from "@minecraft/server";
import {WorldAddon} from "../../../world/WorldAddon";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {PPlayer} from "../../../player/PPlayer";

export class PlayerChangeWorldEvent extends Event
{
    private readonly player: PPlayer;
    private readonly fromWorld: WorldAddon;
    private readonly toWorld: WorldAddon;
    private readonly fromPosition: Vector3;
    private readonly toPosition: Vector3;

    constructor(player: PPlayer, fromWorld: WorldAddon, toWorld: WorldAddon, fromPos: Vector3, toPos: Vector3)
    {
        super();
        this.player = player;
        this.fromWorld = fromWorld;
        this.toWorld = toWorld;
        this.fromPosition = fromPos;
        this.toPosition = toPos;
    }

    public getPlayer(): PPlayer {return this.player;}
    public getBeforeWorld(): WorldAddon {return this.fromWorld;}
    public getNewWorld(): WorldAddon {return this.toWorld;}
    public getBeforePosition(): Vector3 {return this.fromPosition;}
    public getNewPosition(): Vector3 {return this.toPosition;}

    getEventName(): string {
        return EVENTS.playerChangeWorldEvent;
    }
}