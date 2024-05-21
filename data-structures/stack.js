class Stack {
  #_stack = [];

  get top() {
    return this.#_stack[this.size - 1];
  }

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.#_stack.length;
  }

  get list() {
    return this.#_stack;
  }

  push(item, ...rest) {
    this.#_stack[this.size] = item;

    if (rest.length) {
      for (let i = 0; i < rest.length; i++) {
        this.#_stack[this.size] = rest[i];
      }
    }

    return this.size;
  }

  pop() {
    if (this.size > 0) {
      const topItem = this.top;

      this.#_stack.length = this.size - 1;

      return topItem;
    }
  }

  clear() {
    this.#_stack.length = 0;

    return 0;
  }
}
