export default function VisualizerFooter({ progress, stepIndex, totalSteps }) {
  return (
    <div className="flex min-h-[52px] flex-wrap items-center justify-between gap-3 border-t border-[#172e40] bg-[#091725] px-4 py-3 sm:px-7">
      <div className="flex gap-3 text-[9px] text-[#6f8699] sm:gap-5">
        <span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-[#4b8ea0]" />Unsorted</span>
        <span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-[#f2b76b]" />Comparing</span>
        <span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-[#5cdbbb]" />Sorted</span>
      </div>
      <div className="ml-auto flex items-center gap-1.5 font-mono text-[9px] text-[#5c7388]">
        <span>STEP</span>
        <strong className="text-[11px] text-[#b9cedb]">{String(Math.min(stepIndex + 1, totalSteps)).padStart(3, '0')}</strong>
        <span>/ {String(totalSteps).padStart(3, '0')}</span>
        <div className="mx-1 h-[3px] w-20 overflow-hidden rounded bg-[#20394b]"><div className="h-full bg-[#55decb] transition-all" style={{ width: `${progress}%` }} /></div>
        <span className="text-[#55decb]">{progress}%</span>
      </div>
    </div>
  )
}
