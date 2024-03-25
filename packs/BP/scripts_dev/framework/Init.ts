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