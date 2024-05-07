class Stack {
	constructor(items) {
		this.stackSize = 100;
		if (Array.isArray(items) && items.length) {
			this.items = items;
		} else {
			this.items = [];
		}
	}
  
	push(element) {
		this.items.push(element);
	}
  
	pop() {
		return this.items.pop();
	}
  
	peek() {
		return this.items[this.items.length - 1];
	}
  
	isEmpty() {
		return this.items.length === 0;
	}
	
	isFull() {
		return this.items.length === this.stackSize;
	}
  
	size() {
		return this.items.length;
	}
  }
  export default Stack;