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
import {World} from "../../../world/World";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export class PlayerChangeWorldEvent extends Event
{
    private readonly player: Player;
    private readonly fromWorld: Dimension;
    private readonly toWorld: Dimension;
    private readonly fromPosition: Vector3;
    private readonly toPosition: Vector3;

    constructor(player: Player, fromWorld: Dimension, toWorld: Dimension, fromPos: Vector3, toPos: Vector3)
    {
        super();
        this.player = player;
        this.fromWorld = fromWorld;
        this.toWorld = toWorld;
        this.fromPosition = fromPos;
        this.toPosition = toPos;
    }

    public getPlayer(): Entity {return this.player;}
    public getBeforeWorld(): World {return new World(this.fromWorld);}
    public getNewWorld(): World {return new World(this.toWorld);}
    public getBeforePosition(): Vector3 {return this.fromPosition;}
    public getNewPosition(): Vector3 {return this.toPosition;}

    getEventName(): string {
        return EVENTS.playerChangeWorldEvent;
    }
}