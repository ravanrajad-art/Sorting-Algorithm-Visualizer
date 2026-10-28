import AlgorithmGrid from './components/AlgorithmGrid'
import ComparisonSection from './components/ComparisonSection'
import Hero from './components/Hero'
import InfoGrid from './components/InfoGrid'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import VisualizerCard from './components/VisualizerCard'
import { useSortingVisualizer } from './hooks/useSortingVisualizer.js'

export default function App() {
  const visualizer = useSortingVisualizer()

  return (
    <div className="flex min-h-screen bg-[radial-gradient(ellipse_80%_50%_at_70%_-10%,rgba(22,82,113,0.15),transparent_70%)] bg-[#07111e]">
      <Sidebar
        algorithm={visualizer.algorithmId}
        onAlgorithmChange={visualizer.selectAlgorithm}
        isOpen={visualizer.sidebarOpen}
        onClose={() => visualizer.setSidebarOpen(false)}
      />
      <main className="min-w-0 flex-1">
        <Topbar algorithm={visualizer.algorithm} onOpenMenu={() => visualizer.setSidebarOpen(true)} />
        <div className="mx-auto w-full max-w-[1230px] px-4 pb-6 pt-8 sm:px-7 lg:px-[70px] lg:pt-[50px]">
          <Hero />
          <VisualizerCard
            algorithm={visualizer.algorithm}
            frame={visualizer.frame}
            size={visualizer.size}
            speed={visualizer.speed}
            inputMode={visualizer.inputMode}
            customInput={visualizer.customInput}
            progress={visualizer.progress}
            stepIndex={visualizer.stepIndex}
            totalSteps={visualizer.totalSteps}
            running={visualizer.running}
            finished={visualizer.finished}
            onRun={visualizer.run}
            onReset={() => visualizer.reset()}
            onInputChange={visualizer.changeInput}
            onCustomInputChange={visualizer.setCustomInput}
            onApplyCustomInput={visualizer.applyCustomInput}
            onSizeChange={visualizer.changeSize}
            onSpeedChange={visualizer.setSpeed}
          />
          <InfoGrid
            algorithm={visualizer.algorithm}
            frame={visualizer.frame}
            running={visualizer.running}
            finished={visualizer.finished}
          />
          <ComparisonSection />
          <AlgorithmGrid selected={visualizer.algorithmId} onSelect={visualizer.selectAlgorithm} />
          <footer className="mt-11 flex flex-col justify-between gap-3 border-t border-[#152a3b] py-4 text-[9px] text-[#587084] sm:flex-row">
            <span>SortLab is an open-source learning tool.</span>
            <span>
              Built for curious minds <span className="ml-1 text-[#55decb]">✦</span>
            </span>
          </footer>
        </div>
      </main>
    </div>
  )
}
