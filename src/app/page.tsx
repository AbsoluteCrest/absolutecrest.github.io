import NavBar from "@/app/components/NavBar";

export default function Home() {
  return (

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] from-neutral-700 bg-gradient-to-t">
        <NavBar />
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <div className="  rounded-lg p-6 bg-neutral-900 font-sfpro font-bold text-4xl">
                  <p className="font-sfpro text-4xl mb-3">Absolute Crest</p>
                  <p className="font-sfpro ">main</p>
              </div>
          </main>
      </div>
  );
}
