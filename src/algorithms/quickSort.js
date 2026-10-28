export function quickSort(values, record) {
  sortRange(values, 0, values.length - 1, [], record)
  record([], allIndexes(values), 'Quick sort complete')
}

function sortRange(values, low, high, complete, record) {
  if (low > high) return

  if (low === high) {
    record([], [...complete, low], 'Confirmed position')
    return
  }

  const pivot = partition(values, low, high, record)
  sortRange(values, low, pivot - 1, [...complete, pivot], record)
  sortRange(values, pivot + 1, high, [...complete, pivot], record)
}

function partition(values, low, high, record) {
  const pivotValue = values[high]
  let boundary = low

  for (let index = low; index < high; index += 1) {
    record([index, high], [], 'Comparing with pivot')

    if (values[index] < pivotValue) {
      ;[values[boundary], values[index]] = [values[index], values[boundary]]
      record([boundary, index], [], 'Moved value across pivot', true)
      boundary += 1
    }
  }

  ;[values[boundary], values[high]] = [values[high], values[boundary]]
  record([boundary], [boundary], 'Placed pivot', true)
  return boundary
}

function allIndexes(values) {
  return Array.from({ length: values.length }, (_, index) => index)
}
