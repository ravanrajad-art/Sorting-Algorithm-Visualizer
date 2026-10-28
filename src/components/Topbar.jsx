import { Menu } from 'lucide-react'

export default function Topbar({ algorithm, onOpenMenu }) {
  return (
    <header className="flex h-[58px] items-center gap-3.5 border-b border-[#172637] px-[18px] sm:h-[70px] sm:px-[4vw]">
      <button className="p-1 text-[#7790a5] md:hidden" onClick={onOpenMenu} aria-label="Open menu">
        <Menu size={19} />
      </button>
      <div className="flex items-center gap-2.5 text-[11px] text-[#587084]">
        <span>Visualizer</span>
        <span>/</span>
        <strong className="font-medium text-[#a8bacb]">{algorithm.name}</strong>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="grid h-[27px] w-[27px] place-items-center rounded-full bg-[#e3a7f1] font-mono text-[10px] font-medium text-[#081520]">
          DK
        </div>
      </div>
    </header>
  )
}
