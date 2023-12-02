export class ChristmasQueue<T> {
   private queue: { value: T; priority: number }[] = [];

  enqueue(item: T, priority: number): void {
    this.queue.push({ value: item, priority });
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('There are no letters in the queue!');
    }
    return this.queue.shift()?.value;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }
  
}