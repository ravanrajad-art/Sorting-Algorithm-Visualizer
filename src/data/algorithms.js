export const ALGORITHMS = {
  bubble: {
    name: 'Bubble Sort',
    icon: '∿',
    color: 'cyan',
    time: 'O(n²)',
    space: 'O(1)',
    description: 'Compares neighboring values and swaps them when they are out of order.',
    best: 'O(n)',
    average: 'O(n²)',
    worst: 'O(n²)',
    stable: true,
    inPlace: true,
    comparisonBased: true,
    useful: 'Small or nearly sorted arrays',
  },
  selection: {
    name: 'Selection Sort',
    icon: '⌄',
    color: 'amber',
    time: 'O(n²)',
    space: 'O(1)',
    description: 'Finds the smallest remaining value and moves it to the front.',
    best: 'O(n²)',
    average: 'O(n²)',
    worst: 'O(n²)',
    stable: false,
    inPlace: true,
    comparisonBased: true,
    useful: 'Small arrays with low memory',
  },
  insertion: {
    name: 'Insertion Sort',
    icon: '↳',
    color: 'violet',
    time: 'O(n²)',
    space: 'O(1)',
    description: 'Inserts each new value into the correct position in the sorted part.',
    best: 'O(n)',
    average: 'O(n²)',
    worst: 'O(n²)',
    stable: true,
    inPlace: true,
    comparisonBased: true,
    useful: 'Online data or nearly sorted arrays',
  },
  merge: {
    name: 'Merge Sort',
    icon: '⋈',
    color: 'pink',
    time: 'O(n log n)',
    space: 'O(n)',
    description: 'Splits the array, sorts both halves, and merges them together.',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
    stable: true,
    inPlace: false,
    comparisonBased: true,
    useful: 'Predictable performance and linked lists',
  },
  quick: {
    name: 'Quick Sort',
    icon: '↗',
    color: 'blue',
    time: 'O(n log n)',
    space: 'O(log n)',
    description: 'Uses a pivot to divide the array into smaller and larger values.',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n²)',
    stable: false,
    inPlace: true,
    comparisonBased: true,
    useful: 'Fast general-purpose sorting',
  },
  heap: {
    name: 'Heap Sort',
    icon: '⌃',
    color: 'blue',
    time: 'O(n log n)',
    space: 'O(1)',
    description: 'Builds a heap and repeatedly moves the largest value to the end.',
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n log n)',
    stable: false,
    inPlace: true,
    comparisonBased: true,
    useful: 'Guaranteed speed with low memory',
  },
}

export const INPUT_LABELS = {
  random: 'Random',
  sorted: 'Sorted',
  reverse: 'Reverse',
}

export function buildInput(size, mode = 'random') {
  if (mode === 'sorted') {
    return Array.from({ length: size }, (_, index) => 10 + index * 2)
  }

  if (mode === 'reverse') {
    return Array.from({ length: size }, (_, index) => 98 - index * 2)
  }

  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 88) + 10,
  )
}
