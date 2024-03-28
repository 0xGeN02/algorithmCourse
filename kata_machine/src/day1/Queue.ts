/**
 * Queue implementation
 * 
 * @template T
 * @class Queue
 * @property {number} length - the number of nodes in the queue
 * @property {Node<T>} head - the head node
 * @property {Node<T>} tail - the tail node
 * 
 * @method enqueue @complexity O(1) - adds a new node to the tail of the queue
 * @method deque @complexity O(1) - removes the head node and returns its value
 * @method peek @complexity O(1) - returns the value of the head node
 * 
 * @typedef Node<T> - a node in the queue
 */

type Node<T> =  {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    
    constructor() {
        // initialize the queue
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        // create a new node
        const node = {value: item} as Node<T>;
        this.length++;

        // if the queue is empty, set the head and tail to the new node
        if(!this.tail){
            this.tail = this.head = node;
            return;
        }

        // otherwise, add the new node to the tail
        this.tail.next = node;
        this.tail = node;

    }

    deque(): T | undefined {
        // if the queue is empty, return undefined
        if(!this.head){
            return undefined;
        }
        
        // if the queue is not empty, remove the head node
        this.length--;
        
        // store the head node and set the head to the next node
        const head = this.head;
        this.head = this.head.next;
        
        // if the head is undefined, set the tail to undefined
        if (this.head === undefined) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        // return the value of the head node
        return this.head?.value;
    }
}