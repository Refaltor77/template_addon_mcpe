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

import {HandlerListManager} from "./events/HandlerListManager";
import {World} from "./world/World";
import {Dimension} from "@minecraft/server";
import Listener from "./events/Listener";

export default class Init
{
    private readonly eventManager: HandlerListManager;
    private readonly world: World;
    private static instance: Init;

    constructor(world: Dimension)
    {
        this.eventManager = new HandlerListManager();
        this.world = new World(world);
        Init.instance = this;
    }

    public getWorld(): World {return this.world;}

    public registerEvent(name: string, event: Listener)
    {
        HandlerListManager.registerEvent(name, event);
    }

    public static getInstance(): Init {
        return Init.instance;
    }
}