import {Gamemode} from "./Gamemode";
import {GameMode} from "@minecraft/server";

export class Adventure extends Gamemode
{
    public getName(): string
    {
        return GameMode.adventure;
    }

    public static get(): Adventure
    {
        return new this();
    }
}