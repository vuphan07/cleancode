class Store {
  #store = [];

  getAll() {
    return this.#store;
  }

  getItemsInActive() {
    return this.#store.map((item) => item.isActive === false);
  }

  getItemsActive() {
    return this.#store.map((item) => item.isActive === true);
  }

  getItemById(id) {
    const item = this.#store.find((item) => item.id === id);
    return item;
  }

  createItem(item) {
    const newItem = { ...item, id: this.#store.length, active: true };
    this.#store.push(newItem);
  }

  deleteItem(id) {
    this.#store = this.#store.map((item) => {
      if (item.id === id) {
        item.active = false;
      }
      return item;
    });
  }

  updateItem(id, data) {
    this.#store = this.#store.map((item) => {
      if (item.id === id) {
        item = { ...item, ...data };
      }
      return item;
    });
  }
}

module.exports = {
  Store: Store,
};
