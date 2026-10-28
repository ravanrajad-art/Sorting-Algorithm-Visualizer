export default function ArrayChart({ frame, finished, stepIndex, totalSteps }) {
  return (
    <div className="relative h-[235px] overflow-hidden px-4 pb-8 pt-6 sm:h-[288px] sm:px-7">
      <div className="absolute inset-x-4 bottom-9 top-5 flex flex-col justify-between sm:inset-x-7">
        {[0, 1, 2, 3, 4].map((line) => <i key={line} className="h-px w-full bg-[#172e40]" />)}
      </div>
      <div className="relative z-10 flex h-full items-end gap-[clamp(2px,0.55vw,7px)] px-0.5">
        {frame.array.map((value, index) => (
          <div
            key={`${index}-${value}`}
            className={`relative min-w-[2px] flex-1 rounded-t-[3px] transition-all duration-100 ${frame.active.includes(index) ? 'bg-gradient-to-b from-[#f2b76b] to-[#d67c55] shadow-[0_0_7px_rgba(242,183,107,0.3)]' : frame.sorted.includes(index) || (finished && stepIndex === totalSteps - 1) ? 'bg-gradient-to-b from-[#5cdbbb] to-[#298e87]' : 'bg-gradient-to-b from-[#4b8ea0] to-[#31677d]'}`}
            style={{ height: `${value}%` }}
          >
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#b9cedb]">{value}</span>
            <span className="absolute left-0 right-0 top-0 h-0.5 rounded bg-white/30" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-3 flex justify-between font-mono text-[9px] text-[#536b7f] sm:inset-x-7">
        <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
      </div>
    </div>
  )
}
