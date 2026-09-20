"use client";

function Node({
  children,
  emphasis = false,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div
      className={
        emphasis
          ? "relative z-10 rounded-full border border-forest bg-forest px-6 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-lime shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
          : "relative z-10 rounded-2xl border border-stone-200/80 bg-white px-4 sm:px-5 py-2.5 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-forest shadow-soft transition-all duration-300 hover:border-lime/60 hover:shadow-card hover:-translate-y-0.5"
      }
    >
      {children}
    </div>
  );
}

// Straight vertical line connector with light green flow animation
function StraightFlowLine({ height = 28 }: { height?: number }) {
  return (
    <div
      className="relative flex justify-center w-full overflow-visible select-none"
      style={{ height: `${height}px` }}
      aria-hidden
    >
      <svg
        className="h-full w-6 overflow-visible"
        viewBox="0 0 24 28"
        fill="none"
      >
        {/* Base stone line */}
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
        />
        {/* Animated light green flowing line */}
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="28"
          stroke="#82CD22"
          strokeWidth="2"
          className="flow-dash-green"
        />
      </svg>
    </div>
  );
}

// 3-Way Branch Split Connector (From 1 into 3)
function BranchSplit3({ height = 28 }: { height?: number }) {
  return (
    <div
      className="relative w-full max-w-[460px] overflow-visible select-none"
      style={{ height: `${height}px` }}
      aria-hidden
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 28"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Base stone paths */}
        <path
          d="M 50 0 L 50 10 Q 50 14 46 14 L 20.667 14 Q 16.667 14 16.667 18 L 16.667 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 50 0 L 50 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 50 0 L 50 10 Q 50 14 54 14 L 79.333 14 Q 83.333 14 83.333 18 L 83.333 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated light green flowing paths */}
        <path
          d="M 50 0 L 50 10 Q 50 14 46 14 L 20.667 14 Q 16.667 14 16.667 18 L 16.667 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
        <path
          d="M 50 0 L 50 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
        <path
          d="M 50 0 L 50 10 Q 50 14 54 14 L 79.333 14 Q 83.333 14 83.333 18 L 83.333 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
      </svg>
    </div>
  );
}

// 3-Way Branch Merge Connector (From 3 into 1)
function BranchMerge3({ height = 28 }: { height?: number }) {
  return (
    <div
      className="relative w-full max-w-[460px] overflow-visible select-none"
      style={{ height: `${height}px` }}
      aria-hidden
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 28"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Base stone paths */}
        <path
          d="M 16.667 0 L 16.667 10 Q 16.667 14 20.667 14 L 46 14 Q 50 14 50 18 L 50 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 50 0 L 50 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 83.333 0 L 83.333 10 Q 83.333 14 79.333 14 L 54 14 Q 50 14 50 18 L 50 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated light green flowing paths */}
        <path
          d="M 16.667 0 L 16.667 10 Q 16.667 14 20.667 14 L 46 14 Q 50 14 50 18 L 50 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
        <path
          d="M 50 0 L 50 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
        <path
          d="M 83.333 0 L 83.333 10 Q 83.333 14 79.333 14 L 54 14 Q 50 14 50 18 L 50 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
      </svg>
    </div>
  );
}

// 2-Way Branch Split Connector (From 1 into 2)
function BranchSplit2({ height = 28 }: { height?: number }) {
  return (
    <div
      className="relative w-full max-w-[340px] overflow-visible select-none"
      style={{ height: `${height}px` }}
      aria-hidden
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 28"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Base stone paths */}
        <path
          d="M 50 0 L 50 10 Q 50 14 46 14 L 29 14 Q 25 14 25 18 L 25 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 50 0 L 50 10 Q 50 14 54 14 L 71 14 Q 75 14 75 18 L 75 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated light green flowing paths */}
        <path
          d="M 50 0 L 50 10 Q 50 14 46 14 L 29 14 Q 25 14 25 18 L 25 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
        <path
          d="M 50 0 L 50 10 Q 50 14 54 14 L 71 14 Q 75 14 75 18 L 75 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
      </svg>
    </div>
  );
}

// 2-Way Branch Merge Connector (From 2 into 1)
function BranchMerge2({ height = 28 }: { height?: number }) {
  return (
    <div
      className="relative w-full max-w-[340px] overflow-visible select-none"
      style={{ height: `${height}px` }}
      aria-hidden
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 28"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Base stone paths */}
        <path
          d="M 25 0 L 25 10 Q 25 14 29 14 L 46 14 Q 50 14 50 18 L 50 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 75 0 L 75 10 Q 75 14 71 14 L 54 14 Q 50 14 50 18 L 50 28"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Animated light green flowing paths */}
        <path
          d="M 25 0 L 25 10 Q 25 14 29 14 L 46 14 Q 50 14 50 18 L 50 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
        <path
          d="M 75 0 L 75 10 Q 75 14 71 14 L 54 14 Q 50 14 50 18 L 50 28"
          stroke="#82CD22"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="flow-dash-green"
        />
      </svg>
    </div>
  );
}

export default function EcosystemDiagram() {
  return (
    <div className="relative flex flex-col items-center py-6 w-full select-none">
      {/* Dynamic Keyframes for Light Green Flow Animation */}
      <style>{`
        @keyframes ecosystemFlow {
          from {
            stroke-dashoffset: 28;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flow-dash-green {
          stroke-dasharray: 6 8;
          animation: ecosystemFlow 1.1s linear infinite;
          filter: drop-shadow(0 0 3px rgba(130, 205, 34, 0.45));
        }
      `}</style>

      {/* Root Node: Adopt a Village */}
      <Node emphasis>Adopt a Village</Node>

      {/* 3-Way Split */}
      <BranchSplit3 height={30} />

      {/* Soil, Water, Trees */}
      <div className="grid grid-cols-3 w-full max-w-[460px] px-1">
        <div className="flex justify-center">
          <Node>Soil</Node>
        </div>
        <div className="flex justify-center">
          <Node>Water</Node>
        </div>
        <div className="flex justify-center">
          <Node>Trees</Node>
        </div>
      </div>

      {/* 3-Way Merge */}
      <BranchMerge3 height={30} />

      {/* Agriculture */}
      <Node>Agriculture</Node>

      {/* Straight Line to Livelihoods & Food */}
      <StraightFlowLine height={28} />

      {/* Livelihoods & Food */}
      <Node>Livelihoods &amp; Food</Node>

      {/* 2-Way Split */}
      <BranchSplit2 height={30} />

      {/* Education, Health */}
      <div className="grid grid-cols-2 w-full max-w-[340px] px-1">
        <div className="flex justify-center">
          <Node>Education</Node>
        </div>
        <div className="flex justify-center">
          <Node>Health</Node>
        </div>
      </div>

      {/* 2-Way Merge */}
      <BranchMerge2 height={30} />

      {/* Community */}
      <Node>Community</Node>

      {/* Straight Line to Self-Sustainability */}
      <StraightFlowLine height={28} />

      {/* Goal Node: Self-Sustainability */}
      <Node emphasis>Self-Sustainability</Node>
    </div>
  );
}
