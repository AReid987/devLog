export default function Inventory() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-neutral-950 text-neutral-200">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Inventory
            </h1>
            <p className="mt-3 text-2xl">
              Inventory of resources, cloud providers, LLM inference providers, and open source tech
            </p>
            <div className="mt-6">
              {/* Inventory content goes here */}
            </div>
          </main>
        </div>
      )
    }
