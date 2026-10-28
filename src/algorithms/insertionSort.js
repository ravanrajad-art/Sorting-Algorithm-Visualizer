export function insertionSort(values, record) {
  const sorted = [0]

  for (let index = 1; index < values.length; index += 1) {
    let cursor = index

    while (cursor > 0) {
      record([cursor - 1, cursor], sorted)
      if (values[cursor - 1] <= values[cursor]) break

      ;[values[cursor - 1], values[cursor]] = [values[cursor], values[cursor - 1]]
      record([cursor - 1, cursor], sorted, 'Inserted value into position', true)
      cursor -= 1
    }

    sorted.push(index)
    record([], sorted, 'Growing sorted section')
  }
}
