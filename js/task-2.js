class Storage {
    #items;
    constructor (item){
    this.#items = item;
    }

    getItems() {
        return this.#items;
    }
    addItem(newItem) {
      this.#items.push(newItem);  
    }
    removeItem(itemToRemove) {
        return this.#items.splice(this.#items.indexOf(itemToRemove), 1); 
        // return this.#items.filter(item => item !== itemToRemove); // цей спосіб чомусь не працює
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]