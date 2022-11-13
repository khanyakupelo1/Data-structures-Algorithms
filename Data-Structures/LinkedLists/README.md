# LinkedLists

## LinkedLists vs Array

- Arrays are indexed
- On linkedLists you always have to start from the head. That is the  first element.
- Arrays are always located next to each other.
- Elements in a linkedList are scattered just in hash tables

________________________________________________________________

## Functions

- prepend O(1)
- append O(1)
- lookup O(n) This is equivalent to to find function
- **Similar to Array functions**
  - insert O(n)
  - delete O(n)

## Pointers

- Its a reference to another:
  - object
  - node
  - or place in memory
- Garbage collection 
- In javascript memory is managed automatically
  - If for example, there is no OBJECT referencing a location in memory then that data will be removed.

## When to use SLL

- When memory is expensive
- You want fast insertion and deletion


## When to use DDL

- Reverse
- You can easily delete previous node with out having to go back to the head.
- Down side
  - complex
  - Uses too much memory
  