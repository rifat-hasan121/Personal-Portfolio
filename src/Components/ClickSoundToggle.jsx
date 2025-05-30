import React, { useState, useEffect } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const ClickSoundToggle = ({ onToggle }) => {
  const [enabled, setEnabled] = useState(true);

  const toggleSound = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    onToggle(newValue);
  };

  useEffect(() => {
    onToggle(enabled);
  }, []);

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-2 rounded-full shadow-md mb-12"
    >
      {enabled ? <HiSpeakerWave size={27} /> : <HiSpeakerXMark size={27}/>}
    </button>
  );
};

export default ClickSoundToggle;
