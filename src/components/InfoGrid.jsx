import { Activity, ArrowDownUp, Gauge, SquareTerminal, Timer } from 'lucide-react'
import HowItWorks from './HowItWorks'

export default function InfoGrid({ algorithm, frame, running, finished }) {
  return (
    <section className="mt-4 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
      <HowItWorks algorithm={algorithm} frame={frame} running={running} finished={finished} />

      <div className="sub-panel p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="icon-tile bg-[#92dda5]/[0.11] text-[#92dda5]"><Gauge size={16} /></div>
          <div>
            <div className="section-label">SESSION STATS</div>
            <h3 className="mt-1 text-sm text-[#dce9f3]">Live metrics</h3>
          </div>
        </div>
        <div className="mt-5 border-t border-[#1a3040]">
          <Metric icon={<Timer size={14} />} label="Execution time" value={running ? `00:0${Math.min(9, Math.floor(frame.comparisons / 9))}` : finished ? '00:04.2' : '00:00.0'} />
          <Metric icon={<ArrowDownUp size={14} />} label="Comparisons" value={frame.comparisons.toLocaleString()} />
          <Metric icon={<SquareTerminal size={14} />} label="Swaps" value={frame.swaps.toLocaleString()} />
          <Metric icon={<Activity size={14} />} label="Current step" value={finished ? 'Complete' : running ? frame.explanation : 'Ready'} accent />
        </div>
      </div>
    </section>
  )
}

function Metric({ icon, label, value, accent = false }) {
  return (
    <div className="metric-row">
      <span className="flex items-center gap-1.5 text-[10px] text-[#7790a5]">
        {icon}
        {label}
      </span>
      <strong
        className={`max-w-[150px] truncate text-right font-mono text-xs font-medium ${accent ? 'font-sans text-[10px] text-[#55decb]' : 'text-[#c3d6e1]'}`}
      >
        {value}
      </strong>
    </div>
  )
}
