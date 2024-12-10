// Importing React and the useEffect hook
import React, { useEffect } from "react";
// Importing SpeechRecognition and the useSpeechRecognition hook from the react-speech-recognition library
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// Importing the microphone icon from the @tabler/icons-react library
import { IconMicrophone } from "@tabler/icons-react";

// Defining the SpeechRecognitionComponent component
// This component takes a `setSourceText` function as a prop to update the parent component with the recognized speech
const SpeechRecognitionComponent = ({ setSourceText }) => {
  // Extracting `transcript` (the recognized speech text) and `listening` (indicates if it's actively listening) from the useSpeechRecognition hook
  const { transcript, listening } = useSpeechRecognition();

  // Using useEffect to update the `setSourceText` prop whenever the `transcript` changes
  useEffect(() => {
    setSourceText(transcript); // Pass the updated transcript to the parent component
  }, [transcript, setSourceText]); // Dependencies: execute the effect when these values change

  // Function to handle starting and stopping voice recording
  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening(); // Stop listening if it's already active
    } else {
      SpeechRecognition.startListening({ continuous: true }); // Start listening continuously
    }
  };

  // Rendering the component UI
  return (
    <div>
      {/* Displaying a microphone icon that toggles the recording state when clicked */}
      <IconMicrophone
        size={22} // Icon size
        className="text-[#f87315] mt-3" // Tailwind CSS classes for styling
        onClick={handleVoiceRecording} // Event handler for clicking the icon
      />
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default SpeechRecognitionComponent;
