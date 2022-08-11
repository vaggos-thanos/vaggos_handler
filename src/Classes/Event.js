class Event {
    constructor(name, once) {
        this.name = name;
        this.once = once;
    }

    run(...args) {}
}

module.exports = Event;