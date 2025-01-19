import Link from 'next/link';
    import Image from 'next/image';

    export default function Home() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-neutral-950 text-neutral-200">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <Image src="/devLog-Logo-1-no-bg.png" alt="devLog Logo" width={200} height={200} />
            <h1 className="text-6xl font-bold">
              devLog
            </h1>
            <p className="mt-3 text-2xl">
              A. Reid
            </p>
            <div className="mt-6 flex max-w-4xl mx-auto">
              <Link href="/dev-log" className="text-primary hover:underline">
                devLog
              </Link>
              <Link href="/knowledge" className="ml-4 text-primary hover:underline">
                Knowledge
              </Link>
              <Link href="/teamwork" className="ml-4 text-primary hover:underline">
                Teamwork
              </Link>
              <Link href="/resources" className="ml-4 text-primary hover:underline">
                Resources
              </Link>
            </div>
          </main>
        </div>
      );
    }
