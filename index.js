class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addFront(value) {
        let newNode = new Node(value);

        // if no items in list
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // if already has items in list.
        else {
            const oldHead = this.head;
            newNode.next = oldHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    removeFront() {
        // if one item
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        // if no items
        else if (this.length === 0) {
            return this;
        }
        // else
        else {
            this.head = this.head.next;
            this.length--;
        }
        return this;
    }

    front() {
        return this.head ? this.head.value : null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const List = new SLL();

List.addFront(13);
List.addFront(27);
List.addFront(69);

console.log(List);
console.log(List.front());
