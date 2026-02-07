"use client";
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import useTranslate from "./../hooks/useTranslate";
import Swal from "sweetalert2";
import SvgDecorations from "@/components/SvgDecorations";
import TextAreaSource from "./components/TextAreaSource";
import TextAreaTarget from "./components/TextAreaTarget";
import LanguageProp from "./components/LanguageProp";
import { Languages, Sparkles } from "lucide-react";

export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  
  const [languages] = useState<string[]>([
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const { targetText, loading, error } = useTranslate(sourceText, selectedLanguage);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Translation Error",
        text: error,
        confirmButtonText: "OK",
        customClass: {
          popup: 'border-4 border-zinc-800 rounded-2xl',
          confirmButton: 'bg-orange-500 border-4 border-zinc-800 rounded-xl font-black uppercase shadow-[rgba(0,0,0,0.9)_4px_4px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_6px_6px_0px_0px]'
        }
      });
    }
  }, [error]);

  return (
    <div className="w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center min-h-screen">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <BackgroundBeamsWithCollision>
              <BackgroundLines>
                {/* Header */}
                <div className="mb-12">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
                    <h1 className="text-2xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white"
                        style={{
                          textShadow: '4px 4px 0px rgba(249, 115, 21, 0.5)',
                          WebkitTextStroke: '2px rgba(0,0,0,0.3)'
                        }}>
                      Smart <span className="text-orange-500">Language</span>
                    </h1>
                    <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Languages className="w-8 h-8 text-orange-500" />
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-orange-500"
                        style={{
                          textShadow: '3px 3px 0px rgba(0,0,0,0.3)'
                        }}>
                      Converter
                    </h2>
                  </div>
                </div>

                {/* Translation Interface */}
                <div className="mt-7 sm:mt-12 mx-auto max-w-6xl relative">
                  <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
                    <TextAreaSource
                      sourceText={sourceText}
                      setSourceText={setSourceText}
                    />

                    <div className="relative z-10 flex flex-col gap-4 p-6 border-4 border-zinc-800 rounded-3xl 
                                    shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] bg-gradient-to-br from-blue-100 via-cyan-100 to-purple-100
                                    transition-all hover:shadow-[rgba(0,0,0,0.9)_0px_16px_0px_0px] hover:-translate-y-1">
                      {/* Header */}
                      <div className="bg-white border-4 border-zinc-800 rounded-xl px-4 py-3 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]">
                        <h3 className="text-lg font-black uppercase flex items-center gap-2">
                          <Languages className="w-5 h-5 text-blue-500" />
                          Translation Output
                        </h3>
                      </div>

                      <TextAreaTarget
                        targetText={targetText}
                        loading={loading}
                        selectedLanguage={selectedLanguage}
                      />

                      <LanguageProp
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        languages={languages}
                        targetText={targetText}
                      />
                    </div>
                  </div>
                  <SvgDecorations />
                </div>
                
              </BackgroundLines>
            </BackgroundBeamsWithCollision>
          </div>
        </div>
      </div>
    </div>
  );
}