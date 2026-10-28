export function heapSort(values, record) {
  const sorted = []

  for (let index = Math.floor(values.length / 2) - 1; index >= 0; index -= 1) {
    moveLargestToRoot(values, values.length, index, sorted, record)
  }

  for (let end = values.length - 1; end > 0; end -= 1) {
    ;[values[0], values[end]] = [values[end], values[0]]
    sorted.unshift(end)
    record([0, end], sorted, 'Extracted maximum', true)
    moveLargestToRoot(values, end, 0, sorted, record)
  }

  record([], allIndexes(values), 'Heap sort complete')
}

function moveLargestToRoot(values, length, root, sorted, record) {
  let largest = root
  const left = root * 2 + 1
  const right = root * 2 + 2

  if (left < length) {
    record([root, left], sorted, 'Checking left child')
    if (values[left] > values[largest]) largest = left
  }

  if (right < length) {
    record([largest, right], sorted, 'Checking right child')
    if (values[right] > values[largest]) largest = right
  }

  if (largest !== root) {
    ;[values[root], values[largest]] = [values[largest], values[root]]
    record([root, largest], sorted, 'Restoring heap', true)
    moveLargestToRoot(values, length, largest, sorted, record)
  }
}

function allIndexes(values) {
  return Array.from({ length: values.length }, (_, index) => index)
}
