"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import TextArea from "@/components/Inputs/TextArea";
import { IconVolume } from "@tabler/icons-react";
import SpeechRecognitionComponent from "./../components/SpeechRecognition/SpeechRecognition";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className="w-full bg-black bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center">
    <BackgroundBeamsWithCollision>
              <BackgroundLines>
                <h1 className="text-4xl sm:text-6xl font-bold  text-neutral-200">
                  Smart Language{" "}
                  <span className="text-[#f87315]">Converter</span>
                </h1>
                <p className="mt-3 text-neutral-400">
                  Smart Language Converter: Innovating Communication Across
                  Borders.
                </p>
                <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                    <div className="relative z-10 flex flex-col space-x-3 p-3  border-2 rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                      <TextArea
                        id="source-language"
                        value={sourceText}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setSourceText(e.target.value)
                        }
                        placeholder="Source Language"
                      />
                      <div className="flex flex-row justify-between w-full">
                        <span className="cursor-pointer flex space-x-2 flex-row">
                          <SpeechRecognitionComponent
                            setSourceText={setSourceText}
                          />
                          <IconVolume
                            className="text-[#f87315] mt-5"
                            size={22}
                            onClick={() => handleAudioPlayback(sourceText)}
                          />
                        </span>
                        <span className="text-sm pr-4 pt-3 text-white">
                          {sourceText.length} / 2000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundLines>
    </BackgroundBeamsWithCollision>
            </div>
          </div>
        </div>
      </div>
  );
}
