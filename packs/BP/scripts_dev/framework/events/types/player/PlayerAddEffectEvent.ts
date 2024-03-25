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
    Entity, Player,
} from "@minecraft/server";
import {Event} from "../../Event";
import {EVENTS} from "../../EventList";

export default class PlayerAddEffectEvent extends Event
{
    private readonly entity: Player;
    private readonly effect: Effect;

    constructor(entity: Player, effect: Effect)
    {
        super();
        this.entity = entity;
        this.effect = effect;
    }

    public getPlayer(): Player {return this.entity;}
    public getEffect(): Effect {return this.effect;}



    getEventName(): string {
        return EVENTS.entityExplodeEvent;
    }

    isCancellable(): boolean {
        return true;
    }
}