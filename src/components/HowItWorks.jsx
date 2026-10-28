import { Info } from 'lucide-react'

export default function HowItWorks({ algorithm, frame, running, finished }) {
  const status = finished ? 'Sorting complete' : running ? 'What is happening now' : 'Ready to run'

  return (
    <div className="sub-panel p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="icon-tile"><Info size={16} /></div>
        <div>
          <div className="section-label">ABOUT THIS ALGORITHM</div>
          <h3 className="mt-1 text-sm text-[#dce9f3]">How it works</h3>
        </div>
      </div>

      <div className="mt-5 rounded border border-[#1a3b4b] bg-[#0b2030] px-4 py-3" aria-live="polite">
        <span className="text-[9px] uppercase tracking-[0.12em] text-[#55decb]">Current step</span>
        <p className="mt-2 min-h-[56px] text-[11px] leading-7 text-[#dce9f3]">{frame.explanation}</p>
      </div>

      <p className="mt-4 text-[11px] leading-7 text-[#8097aa]">{algorithm.description}</p>

      <div className="mt-5 flex border-t border-[#1a3040] pt-4">
        <Complexity label="Time complexity" value={algorithm.time} first />
        <Complexity label="Space complexity" value={algorithm.space} />
        <Complexity label="Stable sort" value={algorithm.stable ? 'Yes' : 'No'} last />
      </div>

      <p className="mt-4 text-[10px] text-[#6f8699]">Status: <span className="text-[#55decb]">{status}</span></p>
    </div>
  )
}

function Complexity({ label, value, first = false, last = false }) {
  return (
    <div className={`flex-1 ${first ? 'pl-0' : 'pl-2 sm:pl-[18px]'} ${last ? 'border-r-0' : 'border-r border-[#1a3040]'}`}>
      <span className="mb-1.5 block text-[9px] text-[#657f93]">{label}</span>
      <strong className="font-mono text-xs font-medium text-[#b8d5df]">{value}</strong>
    </div>
  )
}
