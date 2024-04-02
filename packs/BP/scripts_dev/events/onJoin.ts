import Listener from "../framework/events/Listener";
import Loader from "../Loader";
import PlayerJoinEvent from "../framework/events/types/player/PlayerJoinEvent";
import {ItemStack} from "@minecraft/server";

export class onJoin extends Listener
{
    public onEvent(event: PlayerJoinEvent, loader: Loader)
    {
        const player = event.getPlayer();
        const armorInventory = player.getArmorInventory();

        // set a kit if player has never played
        if (!event.hasPlayedBefore())
        {
            armorInventory.setHelmet(new ItemStack("minecraft:iron_helmet", 1));
            armorInventory.setChestplate(new ItemStack("minecraft:iron_chestplate", 1));
            armorInventory.setLeggings(new ItemStack("minecraft:iron_leggings", 1));
            armorInventory.setBoots(new ItemStack("minecraft:iron_boots", 1));

            player.sendMessage("OH ! a good kit in your inventory my friend !");
        }
    }
}