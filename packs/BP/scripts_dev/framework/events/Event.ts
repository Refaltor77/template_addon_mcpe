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

import {HandlerListManager} from "./HandlerListManager";
import Loader from "../../Loader";

export abstract class Event
{
    public isCancel: boolean = false;
    public abstract getEventName(): string;

    public call()
    {
        HandlerListManager.callEvent(this.getEventName(), this, Loader.getInstance());
    }

    public isCancellable(): boolean {return false;}
    public cancel(value: boolean)
    {
        this.isCancel = value;
    }
}