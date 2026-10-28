import { bubbleSort } from './bubbleSort.js'
import { heapSort } from './heapSort.js'
import { insertionSort } from './insertionSort.js'
import { mergeSort } from './mergeSort.js'
import { quickSort } from './quickSort.js'
import { selectionSort } from './selectionSort.js'
import { createStepRecorder } from '../utils/createStepRecorder.js'

const SORTERS = {
  bubble: bubbleSort,
  selection: selectionSort,
  insertion: insertionSort,
  merge: mergeSort,
  quick: quickSort,
  heap: heapSort,
}

export function getSteps(input, algorithm) {
  const values = [...input]
  const recorder = createStepRecorder(values)
  const sort = SORTERS[algorithm] || bubbleSort

  sort(values, recorder.record)
  return recorder.steps
}
