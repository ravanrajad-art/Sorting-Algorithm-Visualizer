export function mergeSort(values, record) {
  const sortedValues = splitAndSort(values)

  sortedValues.forEach((value, index) => {
    values[index] = value
    record([index], indexesThrough(index), 'Writing merged value')
  })

  record([], allIndexes(values), 'Merge sort complete')
}

function splitAndSort(items) {
  if (items.length <= 1) return items

  const middle = Math.ceil(items.length / 2)
  const left = splitAndSort(items.slice(0, middle))
  const right = splitAndSort(items.slice(middle))
  return merge(left, right)
}

function merge(left, right) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) result.push(left[leftIndex++])
    else result.push(right[rightIndex++])
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex))
}

function indexesThrough(index) {
  return Array.from({ length: index + 1 }, (_, key) => key)
}

function allIndexes(values) {
  return Array.from({ length: values.length }, (_, index) => index)
}
