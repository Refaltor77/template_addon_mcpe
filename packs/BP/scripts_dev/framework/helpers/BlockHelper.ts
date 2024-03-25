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

import {Block} from "@minecraft/server";
import {MinecraftBlockTypes} from "./Vanilla";

export class BlockHelper
{
    // ultra laggy, warning script pick
    public static getBlockTypeId(block: Block): string|null
    {
        const enumKeys = Object.keys(MinecraftBlockTypes);
        let value = null;
        enumKeys.map(key => {
            let typeId: string = MinecraftBlockTypes[key];
            typeId = typeId.replace("minecraft:", "");
            if (block.permutation.matches(typeId)) value = typeId;
        });
        return value;
    }
}