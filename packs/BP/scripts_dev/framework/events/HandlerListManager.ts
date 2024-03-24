import Listener from "./Listener";

export class HandlerListManager
{
    private events: { [eventName: string]: Function[] } = {};

    registerEvent(eventName: string, listener: Listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener.onEvent.bind(listener));
    }

    callEvent(eventName: string, ...args: any[]) {
        const listeners = this.events[eventName];
        if (listeners) {
            listeners.forEach(listener => {
                listener(...args);
            });
        }
    }
}