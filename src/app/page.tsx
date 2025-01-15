import NavBar from "@/app/components/NavBar";
import MainPage from "@/app/components/MainPage"

export default function Home() {
  return (
      <div className="parallax grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] from-neutral-700 bg-gradient-to-t">
          <NavBar />
          <MainPage />
      </div>
  );
}
