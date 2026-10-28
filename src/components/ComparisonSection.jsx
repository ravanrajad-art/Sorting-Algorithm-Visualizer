import { useState } from 'react'
import { ChevronDown, GitCompareArrows } from 'lucide-react'
import { ALGORITHMS } from '../data/algorithms.js'

export default function ComparisonSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="mt-4">
      <button
        className="panel flex w-full items-center gap-3 p-4 text-left transition hover:border-[#55decb]"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="icon-tile"><GitCompareArrows size={18} /></span>
        <span>
          <strong className="block text-sm text-[#dbe9f1]">Comparison</strong>
          <span className="mt-1 block text-[10px] text-[#71889b]">Compare complexity, memory, stability, and use cases</span>
        </span>
        <ChevronDown className={`ml-auto text-[#7790a5] transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      </button>

      {open && <ComparisonCard />}
    </section>
  )
}

function ComparisonCard() {
  return (
    <div className="sub-panel mt-3 overflow-hidden p-4 sm:p-6">
      <div className="mb-4">
        <div className="section-label">ALGORITHM COMPARISON</div>
        <p className="mt-2 text-[11px] leading-6 text-[#8097aa]">There is no single best algorithm. The right choice depends on the input and memory limits.</p>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[1.2fr_.8fr_.8fr_.8fr_.8fr_.8fr_.8fr_.9fr] border-b border-[#1a3040] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-[#5d7488]">
            <span>Algorithm</span><span>Best</span><span>Average</span><span>Worst</span><span>Space</span><span>Stable</span><span>In-place</span><span>Type</span>
          </div>
          {Object.values(ALGORITHMS).map((algorithm) => (
            <div key={algorithm.name} className="grid grid-cols-[1.2fr_.8fr_.8fr_.8fr_.8fr_.8fr_.8fr_.9fr] items-center border-b border-[#172e40] px-3 py-3 text-[10px] text-[#a3b7c5] last:border-b-0">
              <strong className="text-[#dbe9f1]">{algorithm.name}</strong>
              <span>{algorithm.best}</span><span>{algorithm.average}</span><span>{algorithm.worst}</span><span>{algorithm.space}</span>
              <span className={algorithm.stable ? 'text-[#8de1a7]' : 'text-[#f2b76b]'}>{algorithm.stable ? 'Yes' : 'No'}</span>
              <span>{algorithm.inPlace ? 'Yes' : 'No'}</span>
              <span>{algorithm.comparisonBased ? 'Comparison' : 'Non-comparison'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
