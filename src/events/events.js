var eventSplitter = /\s+/;
function Events() {}

Events.prototype.on = function(events, callback, context) {
    var cache, event, list;
    if(!callback) return this;

    cache = this.__events || (this.__events = {});
    events = events.split(eventSplitter);

    // o1 = o2 = {}。若o2 = {param：value}，o1不变仍为{}；若o2[param] = value，则o1 也等于 {param：value}
    // a1 = a2 = []。若a2 = [11], a1不变仍为[]；若a2.push(11)或a2[0] = 11，则a1 也等于 [11]
    // 故 this.__events = cache = {event: [callback, context]};

    while(event = events.shift()) {
        list = cache[event] || (cache[event] = []);
        list.push(callback, context);
    }
    return this;
}
Events.prototype.off = function(events, callback, context) {
    var cache, event, list;
    if(!(cache = this.__events)) return this;
    if(!(events || callback || context)) {
        delete this.__events;
        return this;
    }

}
var object = new Events();
object.on('expand click', function(){ alert('expanded'); });
console.log(object)
// object.off();
// object.trigger('expand');


// ==== Helper
var keys = Object.keys;
if(!keys) {
    keys = function(o) {
        var result = [];
        for(var key in o) {
            if(o.hasOwnProperty(key)) {
                result.push(key);
            }
        }
        return result;
    }
}
