import { Pause, Play, RefreshCw } from 'lucide-react'
import { INPUT_LABELS } from '../data/algorithms.js'

export default function VisualizerControls({
  inputMode,
  customInput,
  size,
  speed,
  running,
  finished,
  onRun,
  onReset,
  onInputChange,
  onCustomInputChange,
  onApplyCustomInput,
  onSizeChange,
  onSpeedChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-[#172e40] px-4 py-4 sm:px-7 lg:flex-nowrap">
      <div className="flex flex-col gap-2">
        <button className="primary-button shadow-[0_5px_18px_rgba(85,222,203,0.12)]" onClick={onRun}>
          {running ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
          {finished ? 'Run again' : running ? 'Pause' : 'Run algorithm'}
        </button>
        <button className="secondary-button" onClick={onReset} disabled={running}>
          <RefreshCw size={15} />
          New array
        </button>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-3">
        <div className="text-[9px] text-[#7d94a7]">
          <span className="mb-1.5 block">Input data</span>
          <div className="flex flex-wrap gap-1">
            {Object.entries(INPUT_LABELS).map(([mode, label]) => (
              <button
                key={mode}
                className={`rounded border px-1.5 py-1 text-[9px] ${inputMode === mode ? 'border-[#55decb] bg-[#112f3d] text-[#55decb]' : 'border-[#20384a] bg-[#102536] text-[#7890a3]'}`}
                onClick={() => onInputChange(mode)}
                disabled={running}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end gap-1.5">
          <label className="text-[9px] text-[#7d94a7]">
            <span className="mb-1.5 block">Your array</span>
            <input
              className="w-56 rounded border border-[#20384a] bg-[#102536] px-2 py-1 text-[10px] text-[#c2d3df] outline-none placeholder:text-[#5f7689] focus:border-[#55decb]"
              value={customInput}
              onChange={(event) => onCustomInputChange(event.target.value)}
              placeholder="10 42 18 76"
              aria-label="Enter array values separated by spaces"
            />
          </label>
          <button
            className="rounded border border-[#55decb] px-2 py-1 text-[9px] text-[#55decb] disabled:opacity-50"
            onClick={onApplyCustomInput}
            disabled={running}
          >
            Use array
          </button>
        </div>
      </div>

      <div className="ml-auto flex w-full flex-col gap-3 lg:w-[167px]">
        <RangeControl label="Array size" value={size} min="16" max="56" onChange={onSizeChange} />
        <RangeControl
          label="Animation speed"
          value={speed < 35 ? 'Slow' : speed > 72 ? 'Fast' : 'Medium'}
          min="10"
          max="100"
          rawValue={speed}
          onChange={(value) => onSpeedChange(Number(value))}
          wide
        />
      </div>
    </div>
  )
}

function RangeControl({ label, value, rawValue = value, min, max, onChange, wide = false }) {
  return (
    <label className={`text-[9px] text-[#7d94a7] ${wide ? 'w-[167px]' : 'w-[145px]'}`}>
      <span className="mb-1.5 flex justify-between">
        <span>{label}</span>
        <strong className="font-mono text-[10px] text-[#c2d3df]">{value}</strong>
      </span>
      <input
        className="block h-[3px] w-full accent-[#55decb]"
        type="range"
        min={min}
        max={max}
        value={rawValue}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}
