import { useState } from "react";

export default function Button() {
  const [btnClass, setBtnClass] = useState(
    "bg-gradient-to-b  from-indigo-600 to-indigo-800"
  );
  const handleClick = () => {
    btnClass === "bg-gradient-to-b  from-indigo-600 to-indigo-800"
      ? setBtnClass("bg-gray-700")
      : setBtnClass("bg-gradient-to-b  from-indigo-600 to-indigo-800");
  };
  return (
    <button
      onClick={handleClick}
      className={`${btnClass} text-white font-bold rounded-full p-4`}
    >
      Continue
    </button>
  );
}
