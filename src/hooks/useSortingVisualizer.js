import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ALGORITHMS, buildInput } from '../data/algorithms.js'
import { getSteps } from '../utils/algorithmSteps.js'

export function useSortingVisualizer() {
  const [algorithmId, setAlgorithmId] = useState('bubble')
  const [size, setSize] = useState(32)
  const [speed, setSpeed] = useState(65)
  const [inputMode, setInputMode] = useState('random')
  const [customInput, setCustomInput] = useState('')
  const [array, setArray] = useState(() => buildInput(32, 'random'))
  const [stepIndex, setStepIndex] = useState(0)
  const [running, setRunning] = useState(false)
  const [finished, setFinished] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const timer = useRef(null)

  const algorithm = ALGORITHMS[algorithmId]
  const steps = useMemo(() => getSteps(array, algorithmId), [array, algorithmId])
  const frame = steps[Math.min(stepIndex, steps.length - 1)]
  const progress = Math.min(
    100,
    Math.round((stepIndex / Math.max(1, steps.length - 1)) * 100),
  )

  const reset = useCallback(
    (nextSize = size, nextInput = inputMode) => {
      clearTimeout(timer.current)
      setRunning(false)
      setFinished(false)
      setStepIndex(0)
      setArray(buildInput(nextSize, nextInput))
    },
    [inputMode, size],
  )

  const run = useCallback(() => {
    if (running) {
      setRunning(false)
      return
    }

    if (finished) {
      setStepIndex(0)
      setFinished(false)
    }

    setRunning(true)
  }, [finished, running])

  const tick = useCallback(() => {
    setStepIndex((value) => {
      if (value >= steps.length - 1) {
        setRunning(false)
        setFinished(true)
        return value
      }

      return value + 1
    })
  }, [steps.length])

  useEffect(() => {
    if (!running) return undefined

    timer.current = setTimeout(tick, Math.max(12, 340 - speed * 3))
    return () => clearTimeout(timer.current)
  }, [running, speed, tick, stepIndex])

  const selectAlgorithm = (id) => {
    clearTimeout(timer.current)
    setRunning(false)
    setFinished(false)
    setStepIndex(0)
    setAlgorithmId(id)
  }

  const changeSize = (value) => {
    const nextSize = Number(value)
    setSize(nextSize)
    reset(nextSize, inputMode)
  }

  const changeInput = (mode) => {
    setInputMode(mode)
    reset(size, mode)
  }

  const applyCustomInput = () => {
    const values = customInput
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(Number.isFinite)
      .map((value) => Math.max(5, Math.min(100, Math.round(value))))

    if (values.length < 2) return

    clearTimeout(timer.current)
    setRunning(false)
    setFinished(false)
    setStepIndex(0)
    setInputMode('custom')
    setSize(values.length)
    setArray(values)
  }

  return {
    algorithm,
    algorithmId,
    size,
    speed,
    inputMode,
    customInput,
    frame,
    progress,
    stepIndex,
    totalSteps: steps.length,
    running,
    finished,
    sidebarOpen,
    setSidebarOpen,
    setSpeed,
    setCustomInput,
    reset,
    run,
    selectAlgorithm,
    changeSize,
    changeInput,
    applyCustomInput,
  }
}
