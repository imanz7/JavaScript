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

    this.render = function() {
        return `
        <select>
            ${this.items.map(item => `
            <option> ${item} </option>`).join('')}
        </select>`;
    }
}

function HTMLImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src= "${this.src}" />`;
    }
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

// const s = new HTMLElement();
// const s2 = new HTMLSelectElement([1, 2, 3]);

const allElements = [
    new HTMLSelectElement([1, 2, 3]),
    new HTMLImageElement('http://')
];

for(let element of allElements)
console.log(element.render());

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;