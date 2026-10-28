import { Check } from 'lucide-react'
import { ALGORITHMS } from '../data/algorithms.js'

export default function AlgorithmGrid({ selected, onSelect }) {
  return (
    <section className="mt-9">
      <div className="flex items-end justify-between">
        <div>
          <div className="section-label">THE TOOLKIT</div>
          <h2 className="section-title">Choose an algorithm</h2>
        </div>
        <span className="text-[10px] text-[#60778a]">7 algorithms available</span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {Object.entries(ALGORITHMS).map(([id, item]) => (
          <button
            className={`sub-panel relative flex items-center gap-3 p-3.5 text-left transition hover:-translate-y-px hover:border-[#31576a] ${selected === id ? 'border-[#55decb] bg-[#0c202d]' : ''}`}
            key={id}
            onClick={() => onSelect(id)}
          >
            <div className={`grid h-[29px] w-[29px] place-items-center rounded-lg bg-[#152b3c] font-mono text-base ${item.color === 'cyan' ? 'text-[#55decb]' : item.color === 'violet' ? 'text-[#ad8bff]' : item.color === 'amber' ? 'text-[#f4bd69]' : item.color === 'pink' ? 'text-[#ed8eac]' : item.color === 'green' ? 'text-[#8de1a7]' : 'text-[#76a8ff]'}`}>
              {item.icon}
            </div>
            <div>
              <strong className="block text-[11px] font-semibold text-[#dbe9f1]">{item.name}</strong>
              <span className="mt-1 block font-mono text-[9px] text-[#667e91]">{item.time} <i className="text-[#344e61]">·</i> {item.space}</span>
            </div>
            {selected === id && <Check className="absolute right-2.5 top-2.5 text-[#55decb]" size={13} />}
          </button>
        ))}
      </div>
    </section>
  )
}
