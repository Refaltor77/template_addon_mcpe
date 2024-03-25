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

        this.getWorld().getEntities({type: "minecraft:player"}).forEach(player =>
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

    public getWorld(): Dimension
    {
        return this.world;
    }

    public setBlock(blockName: string, position: Vector3): Promise<CommandResult>
    {
        return this.getWorld().runCommandAsync(COMMANDS.setblock + `${position.x} ${position.y} ${position.z} ${blockName}`);
    }
}