export function createStepRecorder(values) {
  const steps = [
    {
      array: [...values],
      active: [],
      sorted: [],
      comparisons: 0,
      swaps: 0,
      explanation: 'Ready to begin',
    },
  ]
  let comparisons = 0
  let swaps = 0

  function record(active = [], sorted = [], explanation = 'Comparing values', didSwap = false) {
    if (active.length > 1) comparisons += 1
    if (didSwap) swaps += 1

    steps.push({
      array: [...values],
      active,
      sorted,
      comparisons,
      swaps,
      explanation,
    })
  }

  return { steps, record }
}
