class Queue {
  #_queue = [];

  get front() {
    return this.#_queue[0];
  }

  get length() {
    return this.#_queue.length;
  }

  get size() {
    return this.#_queue.length;
  }

  get front() {
    return this.#_queue[0];
  }

  get isEmpty() {
    return this.#_queue.length === 0;
  }

  get list() {
    return this.#_queue;
  }

  enqueue(item, ...rest) {
    this.#_queue[this.size] = item;

    if (rest.length) {
      for (let i = 0; i < rest.length; i++) {
        this.#_queue[this.size] = rest[i];
      }
    }

    return this.size;
  }

  dequeue() {
    if (this.size > 0) {
      const firstItem = this.front;

      const newQueue = [];

      for (let i = 1; i < this.size; i++) {
        newQueue[newQueue.length] = this.#_queue[i];
      }

      this.#_queue = newQueue;

      return firstItem;
    }
  }

  clear() {
    this.#_queue.length = 0;

    return 0;
  }
}
