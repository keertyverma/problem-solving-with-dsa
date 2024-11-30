class MyHashTable<K, V> {
  private buckets: Array<[K, V][]>; // array of buckets, each bucket stores a list of key-value pair
  private capacity: number; // total number of buckets in the hash table
  private size: number; // current number of key-value pairs in hash table

  constructor(capacity: number = 10) {
    this.capacity = capacity;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  /**
   * Hash function to compute an index for a given key.
   * Converts the key to a string and generates a hash value within the range of bucket indices.
   * @param key - The key to hash.
   * @returns The computed index for the key.
   */
  private hash(key: K): number {
    const stringKey = typeof key === "string" ? key : JSON.stringify(key);
    let hash = 0;

    // Compute hash value based on character codes.
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash + stringKey.charCodeAt(i) * i) % this.capacity;
    }

    return hash;
  }

  /**
   * Adds or updates a key-value pair in the hash table.
   * @param key - The key to insert or update.
   * @param value - The value associated with the key.
   */
  public set(key: K, value: V): void {
    const index = this.hash(key); // get the index for the key
    const bucket = this.buckets[index];

    // Check if the key already exists in the bucket.
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value; // update value if key exists.
        return;
      }
    }

    // If the key doesn't exist, add a new key-value pair to the bucket.
    bucket.push([key, value]);
    this.size++;
  }

  /**
   * Retrieves the value associated with a given key.
   * @param key - The key to search for.
   * @returns The value associated with the key, or undefined if not found.
   */
  public get(key: K): V | undefined {
    const index = this.hash(key); // get the index for the key
    const bucket = this.buckets[index];

    // search for the key in the bucket
    for (const [existingKey, value] of bucket) {
      if (existingKey === key) return value;
    }

    return undefined;
  }

  /**
   * Deletes a key-value pair from the hash table.
   * @param key - The key to delete.
   * @returns True if the key-value pair was deleted, false otherwise.
   */
  public delete(key: K): boolean {
    const index = this.hash(key); // get the index for the key
    const bucket = this.buckets[index];

    // search for the key in the bucket
    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket.splice(i, 1); // remove key-value pair from the bucket
        this.size--; // decrement the size of the hash table
        return true;
      }
    }

    return false;
  }

  /**
   * Checks if a key exists in the hash table.
   * @param key - The key to check for.
   * @returns True if the key exists, false otherwise.
   */
  public has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  /**
   * Gets the total number of key-value pairs in the hash table.
   * @returns The size of the hash table.
   */
  public getSize(): number {
    return this.size;
  }

  /**
   * Retrieves all keys from the hash table.
   * @returns An array of all keys.
   */
  public keys(): K[] {
    const existingKeys: K[] = [];

    for (const bucket of this.buckets) {
      for (const [key, _] of bucket) {
        existingKeys.push(key);
      }
    }

    return existingKeys;
  }

  /**
   * Retrieves all values from the hash table.
   * @returns An array of all values.
   */
  public values(): V[] {
    const existingValues: V[] = [];

    for (const bucket of this.buckets) {
      for (const [_, value] of bucket) {
        existingValues.push(value);
      }
    }
    return existingValues;
  }
}

// example usage

const hashTable = new MyHashTable<string | number, number>();

// Add key-value pairs
hashTable.set("apple", 10);
hashTable.set("banana", 20);
hashTable.set(42, 30);

// Retrieve keys
console.log("Keys:", hashTable.keys()); // Output: ["apple", "banana", 42]

// Retrieve values
console.log("Values:", hashTable.values()); // Output: [10, 20, 30]

// Retrieve a specific value
console.log("Value for 'apple':", hashTable.get("apple")); // Output: 10

// Check if a key exists
console.log("Has 'banana':", hashTable.has("banana")); // Output: true

// Delete a key
console.log("Delete 'banana':", hashTable.delete("banana")); // Output: true
console.log("Keys after deletion:", hashTable.keys()); // Output: ["apple", 42]
