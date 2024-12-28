"use client";

import { appInsights } from "@/lib/applicationInsights";

export default function Home() {
  return (
    <>
      <button onClick={() => appInsights.trackDuration("first-button")}>Click here</button>
      <hr />
      <button onClick={() => appInsights.trackDuration("second-button")}>Click here too</button>
    </>
  );
}
