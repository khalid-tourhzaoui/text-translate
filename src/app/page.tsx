"use client";
import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import useTranslate from "./../hooks/useTranslate";
import CategoryLinks from "@/components/categoryLinks";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import SvgDecorations from "@/components/SvgDecorations";
import TextAreaSource from "./components/TextAreaSource";
import TextAreaTarget from "./components/TextAreaTarget";
import LanguageProp from "./components/LanguageProp";
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

  const { targetText, loading, error } = useTranslate(sourceText,selectedLanguage);
  console.log(targetText);

  

  useEffect(() => {
    if (error) {
      // Afficher l'erreur avec SweetAlert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error, // Le message d'erreur
        confirmButtonText: "OK",
      });
    }
  }, [error]);
  return (
    <div className="w-full bg-black bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            {/* <BackgroundBeamsWithCollision>
              <BackgroundLines> */}
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
                    <TextAreaSource
                      sourceText={sourceText}
                      setSourceText={setSourceText}
                    />
                    {/* **************************************************************************** */}
                    <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg 
                       bg-white border-neutral-700 shadow-gray-900/20">
                      <TextAreaTarget
                        targetText={targetText}
                        loading={loading}
                        selectedLanguage={selectedLanguage}
                      />
                      {/* **************************************************************************** */}
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
                <CategoryLinks />
              {/* </BackgroundLines>
            </BackgroundBeamsWithCollision> */}
          </div>
        </div>
      </div>
    </div>
  );
}
