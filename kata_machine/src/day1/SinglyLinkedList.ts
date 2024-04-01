/**
 * Singly Linked List
 * 
 * A singly linked list is a data structure that contains a sequence of elements where each element points to the next one.
 * 
 * @0xGeN02
 * 
 * @template t
 * @class SinglyLinkedList
 * @property {number} length - the number of nodes in the list
 * @property {Node<T>} head - the head node
 * @property {Node<T>} tail - the tail node
 * 
 * @method prepend @complexity O(1) - adds a new node to the head of the list
 * @method append @complexity O(1) - adds a new node to the tail of the list
 * @method insertAt @complexity O(n) - adds a new node at a specific index
 * @method remove @complexity O(n) - removes a node from the list
 * @method get @complexity O(n) - returns the value of a node at a specific index
 * @method removeAt @complexity O(n) - removes a node at a specific index
 */

type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
        return;
    }
    
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.tail!.next = node;
        this.tail = node;
        return;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error('Index out of bounds');
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        else if (idx === this.length) {
            this.append(item);
            return;
        }

        const node = { value: item } as Node<T>;
        let current = this.head;
        let prev : Node <T> | undefined = undefined;

        for (let i = 0; i < idx; i++) {
            prev = current;
            current = current?.next;
        }

        prev!.next = node;
        node.next = current;
        this.length++;
        return;
    }
    
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }

        let current: Node <T> | undefined = this.head;
        let prev : Node <T> | undefined = this.head;
        
        while(current){
            if(current.value === item){
                if(!prev){
                    this.head = current.next;
                }
                else{
                    prev.next = current?.next;
                }
                this.length--;
                return current.value;
            }

            prev = current;
            current = current.next;
        }
        return undefined;
    }
    
    get(idx: number): T | undefined {
        if(!this.head || idx < 0 || idx > this.length){
            return undefined;
        }
        
        let current = this.head;
        let count = 0;
        while(current && count < idx){
            current = current.next!;
            count++;
        }
        return current.value;
    }
    
    removeAt(idx: number): T | undefined {
        if(!this.head || idx < 0 || idx > this.length){
            return undefined;
        }

        if(idx === 0){
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        }
        
        let current = this.head;
        let prev : Node <T> | undefined = this.head;
        let count = 0;
        while(current && count < idx){
            prev = current;
            current = current.next!;
            count++;
        }
        
        prev!.next = current?.next;
        this.length--;
        return current ? current.value : undefined;
    }
}