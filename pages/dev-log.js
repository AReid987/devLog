export default function DevLog() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-neutral-950 text-neutral-200">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Dev Log
            </h1>
            <p className="mt-3 text-2xl">
              Track your development progress
            </p>
            <div className="mt-6">
              {/* Dev Log content goes here */}
            </div>
          </main>
        </div>
      )
    }
