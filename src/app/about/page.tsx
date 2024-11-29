import NavBar from "@/app/components/NavBar";
import MainAbout from "@/app/components/MainAbout";

export default function About() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen h-full w-full p-8 pb-20 gap-16 sm:p-20 from-neutral-600 bg-gradient-to-t">
            <NavBar />
            <MainAbout />
        </div>
    );
}
