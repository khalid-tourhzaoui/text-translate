import { BackgroundLines } from "@/components/ui/background-lines";
import { Boxes } from "@/components/ui/background-Boxes";

export default function Home() {
  return (
    <div className="w-full bg-black bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <BackgroundLines>
              <h1 className="text-4xl sm:text-6xl font-bold  text-neutral-200">
              Smart Language <span className="text-[#f87315]">Converter</span>
              </h1>

              <p className="mt-3 text-neutral-400">
                LinguaSpeak: Bridging Voices, Connecting Worlds.
              </p>
            </BackgroundLines>
          </div>
        </div>
      </div>
    </div>
  );
}
