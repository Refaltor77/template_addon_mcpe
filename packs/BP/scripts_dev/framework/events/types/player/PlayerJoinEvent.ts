import {Player} from "@minecraft/server";

export default class PlayerJoinEvent
{
    private readonly player: Player;
    private readonly initialSpawn: boolean;

    constructor(player: Player, initialSpawn: boolean)
    {
        this.player = player;
        this.initialSpawn = initialSpawn;
    }

    public getPlayer(): Player {return this.player;}
    public hasPlayedBefore(): boolean {return this.initialSpawn;}
}