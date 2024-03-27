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
import {EntityComponent, EntityEquippableComponent, EquipmentSlot, ItemStack} from "@minecraft/server";

export class PlayerArmorInventory
{
    private readonly player: PPlayer;

    constructor(player: PPlayer)
    {
        this.player = player;
    }

    private getEquippable(): EntityComponent|EntityEquippableComponent|null
    {
        const player = this.player;
        const equippable: EntityEquippableComponent|EntityComponent = player.getRealPlayer().getComponent(EntityEquippableComponent.componentId);
        if (equippable === undefined) return null;
        return equippable;
    }

    public inventoryIsValid(): boolean
    {
        if (this.getEquippable() === null) return false;
        return true;
    }

    public getHelmet(): ItemStack|null
    {
        const equippable = this.getEquippable();
        let item = null;
        if (equippable instanceof EntityEquippableComponent)
        {
            item = equippable.getEquipment(EquipmentSlot.Head);
        }
        return item;
    }

    public getChestplate(): ItemStack|null
    {
        const equippable = this.getEquippable();
        let item = null;
        if (equippable instanceof EntityEquippableComponent)
        {
            item = equippable.getEquipment(EquipmentSlot.Chest);
        }
        return item;
    }

    public getLeggings(): ItemStack|null
    {
        const equippable = this.getEquippable();
        let item = null;
        if (equippable instanceof EntityEquippableComponent)
        {
            item = equippable.getEquipment(EquipmentSlot.Legs);
        }
        return item;
    }

    public getBoots(): ItemStack|null
    {
        const equippable = this.getEquippable();
        let item = null;
        if (equippable instanceof EntityEquippableComponent)
        {
            item = equippable.getEquipment(EquipmentSlot.Feet);
        }
        return item;
    }

    public setHelmet(item: ItemStack): boolean
    {
        const equippable = this.getEquippable();
        if (equippable instanceof EntityEquippableComponent)
        {
            equippable.setEquipment(EquipmentSlot.Head, item);
            return true;
        }
        return false;
    }

    public setChestplate(item: ItemStack): boolean
    {
        const equippable = this.getEquippable();
        if (equippable instanceof EntityEquippableComponent)
        {
            equippable.setEquipment(EquipmentSlot.Chest, item);
            return true;
        }
        return false;
    }

    public setLeggings(item: ItemStack): boolean
    {
        const equippable = this.getEquippable();
        if (equippable instanceof EntityEquippableComponent)
        {
            equippable.setEquipment(EquipmentSlot.Legs, item);
            return true;
        }
        return false;
    }

    public setBoots(item: ItemStack): boolean
    {
        const equippable = this.getEquippable();
        if (equippable instanceof EntityEquippableComponent)
        {
            equippable.setEquipment(EquipmentSlot.Feet, item);
            return true;
        }
        return false;
    }
}