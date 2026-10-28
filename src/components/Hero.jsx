import { Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex min-h-0 items-center justify-between lg:min-h-[150px]">
      <div>
        <div className="flex items-center gap-2 font-mono text-[9px] font-medium tracking-[0.13em] text-[#55decb]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#55decb] shadow-[0_0_12px_#55decb]" />
          INTERACTIVE PLAYGROUND
        </div>
        <h1 className="my-3 text-[38px] font-bold leading-[1.08] tracking-[-0.065em] text-[#eff7fc] sm:text-[clamp(34px,4.5vw,54px)]">
          Sorting, made <em className="not-italic text-[#55decb]">visible.</em>
        </h1>
        <p className="max-w-[480px] text-xs leading-[1.7] text-[#8196a9] sm:text-[13px]">
          Watch algorithms think. Tune the inputs, run the animation, and build an intuition for how data moves.
        </p>
      </div>
      <div className="relative mr-[8%] hidden h-[142px] w-[142px] opacity-85 sm:block">
        <div className="absolute inset-[15px] rotate-[35deg] skew-x-[-17deg] rounded-full border border-[#244a57]" />
        <div className="absolute inset-0 -rotate-[38deg] skew-y-[-19deg] rounded-full border border-[#1b3d51]" />
        <div className="absolute inset-12 grid place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#9effef,#2ca79e)] text-[#06353a] shadow-[0_0_40px_rgba(85,222,203,0.4)]">
          <Zap size={20} />
        </div>
      </div>
    </section>
  )
}
