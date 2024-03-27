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

import {Entity, EntityDamageSource, Player} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";
import {PPlayer} from "../../../player/PPlayer";

export class PlayerDeathEvent extends Event
{
    private readonly player: PPlayer;
    private readonly cause: EntityDamageSource;

    constructor(player: PPlayer, damage: EntityDamageSource)
    {
        super();
        this.player = player;
        this.cause = damage;
    }

    public getPlayer(): PPlayer {return this.player;}
    public getCause(): EntityDamageSource {return this.cause;}

    getEventName(): string {
        return EVENTS.playerDeathEvent;
    }
}