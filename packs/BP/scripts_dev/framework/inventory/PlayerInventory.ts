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

import {PPlayer} from "../player/PPlayer";
import {EntityComponent, EntityInventoryComponent, ItemStack, ItemType, system} from "@minecraft/server";

export class PlayerInventory
{
    private readonly player: PPlayer;

    constructor(player: PPlayer)
    {
        this.player = player;
    }

    private getPlayer(): PPlayer
    {
        return this.player;
    }

    private getInventory(): EntityInventoryComponent|null
    {
        const inventory: EntityComponent = this.getPlayer().getRealPlayer().getComponent(EntityInventoryComponent.componentId);
        if (inventory instanceof EntityInventoryComponent)
        {
            if (inventory.container !== undefined)
                return inventory;
        }
        return null;
    }

    public isInventoryValid(): boolean
    {
        const inventory = this.getInventory();
        return !inventory === null;
    }

    public getItem(slot: number): ItemStack
    {
        const inventory = this.getInventory();
        const container = inventory.container;
        return container.getItem(slot);
    }

    public setItem(slot: number, item: ItemStack)
    {
        const inventory = this.getInventory();
        const container = inventory.container;
        container.getSlot(slot).setItem(item);
    }

    public getContent(air: false): ItemStack[]
    {
        let content: ItemStack[] = [];
        const inventory = this.getInventory();
        const container = inventory.container;
        for (let i = 0; i <= container.size; i++)
            content.push(this.getItem(i));
        return content;
    }

    public clearAll(): void
    {
        system.run(() => {
            let inventory = this.getInventory();
            let container = inventory.container;
            container.clearAll();
        });
    }

    public getItemsCount(): number
    {
        const inventory = this.getInventory();
        const container = inventory.container;
        let count = 0;
        for (let i = 0; i <= container.size; i++)
            count += this.getItem(i).amount;
        return count;
    }
}