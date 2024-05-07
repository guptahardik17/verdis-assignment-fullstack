class Stack {
	constructor(items) {
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
  
	size() {
		return this.items.length;
	}
  }
  export default Stack;