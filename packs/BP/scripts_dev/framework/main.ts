import {system, world} from "@minecraft/server";
import {Handle} from "./events/Handle";
import Loader from "../Loader";

system.run(() => {
    const loader = new Loader(world.getDimension('overworld'));
    const handlerEvents = new Handle();

    loader.onStart();
    handlerEvents.handleAllEvents(loader);
});