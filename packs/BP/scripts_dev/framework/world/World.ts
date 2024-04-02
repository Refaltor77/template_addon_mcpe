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

import {Block, CommandResult, Dimension, Player, Vector3} from "@minecraft/server";
import {COMMANDS} from "../commands/CommandList";

export class World
{
    private readonly world: Dimension;

    constructor(world: Dimension)
    {
        this.world = world;
    }

    public broadcastMessage(message: string, prefix: string|null = null): number
    {
        let messageSendCount = 0;

        this.getDimension().getEntities({type: "minecraft:player"}).forEach(player =>
        {
            if (player instanceof Player)
            {
                let messageBuild = "";
                if (prefix !== null) messageBuild += prefix + " ";
                messageBuild += message;
                player.sendMessage(messageBuild);
                messageSendCount++;
            }
        });

       return messageSendCount;
    }

    public getDimension(): Dimension
    {
        return this.world;
    }

    public setBlock(blockName: string, position: Vector3): Promise<CommandResult>
    {
        return this.getDimension().runCommandAsync(COMMANDS.setblock + `${position.x} ${position.y} ${position.z} ${blockName}`);
    }

    // if null, chunk is not load
    public getBlock(pos: Vector3): Block|null
    {
        const dimension = this.getDimension();
        const block = dimension.getBlock(pos);
        if (block === undefined)
            return null;
        return block;
    }

    public chunkIsLoadAtPos(pos: Vector3): boolean
    {
        const block = this.getBlock(pos);
        return block !== null;
    }
}