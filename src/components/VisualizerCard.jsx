import ArrayChart from './ArrayChart'
import VisualizerControls from './VisualizerControls'
import VisualizerFooter from './VisualizerFooter'

export default function VisualizerCard({
  algorithm,
  frame,
  size,
  speed,
  inputMode,
  customInput,
  progress,
  stepIndex,
  totalSteps,
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
    <section className="panel mt-8 overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
      <VisualizerHeader algorithm={algorithm} running={running} finished={finished} />
      <VisualizerControls
        inputMode={inputMode}
        customInput={customInput}
        size={size}
        speed={speed}
        running={running}
        finished={finished}
        onRun={onRun}
        onReset={onReset}
        onInputChange={onInputChange}
        onCustomInputChange={onCustomInputChange}
        onApplyCustomInput={onApplyCustomInput}
        onSizeChange={onSizeChange}
        onSpeedChange={onSpeedChange}
      />
      <ArrayChart frame={frame} finished={finished} stepIndex={stepIndex} totalSteps={totalSteps} />
      <VisualizerFooter progress={progress} stepIndex={stepIndex} totalSteps={totalSteps} />
    </section>
  )
}

function VisualizerHeader({ algorithm, running, finished }) {
  const statusColor = finished ? 'text-[#94dca9]' : running ? 'text-[#55decb]' : 'text-[#8ba2b3]'
  const dotColor = finished ? 'bg-[#94dca9]' : running ? 'bg-[#55decb] shadow-[0_0_8px_#55decb]' : 'bg-[#72879a]'

  return (
    <div className="flex items-center justify-between border-b border-[#172e40] px-4 py-5 sm:px-7">
      <div>
        <div className="section-label">NOW EXPLORING</div>
        <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.04em] text-[#eff7fc]">{algorithm.name}</h2>
      </div>
      <div className={`flex items-center gap-1.5 text-[10px] ${statusColor}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
        {finished ? 'Complete' : running ? 'Running' : 'Ready to run'}
      </div>
    </div>
  )
}
