import {Player} from "@minecraft/server";

export default class PlayerQuitEvent
{
    private readonly player: Player;

    constructor(player: Player)
    {
        this.player = player;
    }

    public getPlayer(): Player {return this.player;}
}