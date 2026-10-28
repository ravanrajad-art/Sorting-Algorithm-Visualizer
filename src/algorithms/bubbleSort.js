export function bubbleSort(values, record) {
  const sorted = []

  for (let end = values.length - 1; end > 0; end -= 1) {
    for (let index = 0; index < end; index += 1) {
      record([index, index + 1], sorted)

      if (values[index] > values[index + 1]) {
        ;[values[index], values[index + 1]] = [values[index + 1], values[index]]
        record([index, index + 1], sorted, 'Swapped neighboring values', true)
      }
    }

    sorted.unshift(end)
    record([], sorted, 'Growing sorted section')
  }

  record([], allIndexes(values), 'Bubble sort complete')
}

function allIndexes(values) {
  return Array.from({ length: values.length }, (_, index) => index)
}
