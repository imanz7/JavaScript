function HTMLElement () {
    this.click = function() {
        console.log("clicked");
    }
}

HTMLElement.prototype.focus = function() {
    console.log("focused");
}

function HTMLSelectElement(items = []) {
    this.items = items;
    
    this.addItem = function(items) {
        this.items.push(items);
        console.log("added");
    }

    this.removeItem = function(items) {
        this.items.splice(this.items.indexOf(items), 1);
        console.log("removed");
    }
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const s = new HTMLElement();
const s2 = new HTMLSelectElement();