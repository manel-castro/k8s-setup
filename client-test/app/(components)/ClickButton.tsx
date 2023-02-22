"use client";
import { useState } from "react";

export default function ClickButton() {
  const [IsClick, setIsClick] = useState(false);
  return (
    <button onClick={() => setIsClick(!IsClick)}>
      {IsClick ? "True" : "False"}
    </button>
  );
}
