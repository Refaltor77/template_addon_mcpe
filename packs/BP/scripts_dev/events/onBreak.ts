import Listener from "../framework/events/Listener";
import BlockBreakEvent from "../framework/events/types/block/BlockBreakEvent";
import Loader from "../Loader";
import {PPlayer} from "../framework/player/PPlayer";
import EntitySpawnEvent from "../framework/events/types/entity/EntitySpawnEvent";

export class onBreak extends Listener
{
    onEvent(event: EntitySpawnEvent, loader: Loader)
    {

    }
}