export function selectionSort(values, record) {
  const sorted = []

  for (let index = 0; index < values.length - 1; index += 1) {
    let minimum = index

    for (let cursor = index + 1; cursor < values.length; cursor += 1) {
      record([minimum, cursor], sorted)
      if (values[cursor] < values[minimum]) minimum = cursor
    }

    ;[values[index], values[minimum]] = [values[minimum], values[index]]
    sorted.push(index)
    record([index, minimum], sorted, 'Placed minimum value', true)
  }

  record([], allIndexes(values), 'Selection sort complete')
}

function allIndexes(values) {
  return Array.from({ length: values.length }, (_, index) => index)
}
