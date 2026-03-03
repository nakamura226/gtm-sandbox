"use client";

import { sendGTMEvent } from "@next/third-parties/google";

import { useState } from "react";

export const Form = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const data = JSON.parse(jsonInput);
      sendGTMEvent(data);
    } catch {
      setError("JSON形式で入力してください");
    }
  };

  return (
    <form className="flex flex-col gap-4 w-lg" onSubmit={handleSubmit}>
      <textarea
        placeholder="送信するJSONデータを入力してください"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        className="border p-2 rounded h-40 font-mono"
      />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send Event
      </button>
    </form>
  );
};
