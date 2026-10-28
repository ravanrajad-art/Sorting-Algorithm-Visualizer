import {
  Activity,
  ArrowDownUp,
  BarChart3,
  ChevronDown,
  Code2,
  GitBranch,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { ALGORITHMS } from '../data/algorithms.js'

export default function Sidebar({
  algorithm,
  onAlgorithmChange,
  isOpen,
  onClose,
}) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-[240px] shrink-0 -translate-x-full flex-col border-r border-[#172637] bg-[#07111e]/95 p-[23px_14px_18px] shadow-2xl transition-transform md:relative md:translate-x-0 md:shadow-none ${isOpen ? 'translate-x-0' : ''}`}
    >
      <div className="flex items-center gap-2.5 px-3 pb-7 text-lg font-extrabold tracking-[-0.04em] text-[#f0f7ff]">
        <div className="grid h-[29px] w-[29px] place-items-center rounded-lg bg-[#55decb] text-[#07111e] shadow-[0_0_22px_rgba(85,222,203,0.24)]">
          <BarChart3 size={18} />
        </div>
        <span>
          sort<span className="text-[#55decb]">lab</span>
        </span>
        <button
          className="ml-auto text-2xl leading-none text-[#7790a5] md:hidden"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      <div className="mb-7">
        <div className="px-3 pb-2.5 font-mono text-[9px] font-medium tracking-[0.13em] text-[#6d8297]">
          LEARN
        </div>
        <button className="flex w-full items-center gap-2.5 rounded-lg bg-[#112938] px-3 py-2.5 text-left text-xs text-[#57ddca] shadow-[inset_2px_0_#55decb]">
          <Activity size={16} />
          Visualizer
        </button>
        <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs text-[#7890a6] transition hover:bg-[#0d1c2d] hover:text-[#dceaf7]">
          <Code2 size={16} />
          Algorithms
          <span className="ml-auto rounded-[10px] bg-[#152638] px-1.5 py-0.5 text-[10px] text-[#8fa9bc]">7</span>
        </button>
        <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs text-[#7890a6] transition hover:bg-[#0d1c2d] hover:text-[#dceaf7]">
          <Layers3 size={16} />
          Concepts
        </button>
      </div>

      <div className="mb-7">
        <div className="px-3 pb-2.5 font-mono text-[9px] font-medium tracking-[0.13em] text-[#6d8297]">
          ALGORITHMS
        </div>
        {Object.entries(ALGORITHMS).map(([id, item]) => (
          <button
            key={id}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[11px] transition hover:bg-[#0d1c2d] hover:text-[#dceaf7] ${algorithm === id ? 'bg-[#1d3a4a]/70 text-[#e6f5fc]' : 'text-[#8196a9]'}`}
            onClick={() => {
              onAlgorithmChange(id)
              onClose()
            }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${item.color === 'cyan' ? 'bg-[#55decb]' : item.color === 'violet' ? 'bg-[#ad8bff]' : item.color === 'amber' ? 'bg-[#f4bd69]' : item.color === 'pink' ? 'bg-[#ed8eac]' : item.color === 'green' ? 'bg-[#8de1a7]' : 'bg-[#76a8ff]'}`} />
            <span>{item.name}</span>
            {algorithm === id && <ChevronDown className="ml-auto text-[#55decb]" size={14} />}
          </button>
        ))}
      </div>

      <div className="mt-auto px-1">
        <div className="flex gap-2 rounded-lg border border-[#203849] bg-[#0c1b2a] p-3 text-[#55decb]">
          <Sparkles size={15} />
          <div>
            <strong className="block text-[10px] text-[#d6e6f1]">Make it yours</strong>
            <span className="mt-0.5 block text-[9px] text-[#7490a6]">Drag the controls to explore</span>
          </div>
        </div>
        <a className="flex items-center gap-2 px-2 py-4 text-[10px] text-[#7f95a8]" href="https://github.com" target="_blank" rel="noreferrer">
          <GitBranch size={15} />
          View on GitHub
          <ArrowDownUp className="ml-auto" size={13} />
        </a>
        <div className="px-2 font-mono text-[9px] text-[#41586c]">v1.0.0 · Built with React</div>
      </div>
    </aside>
  )
}
