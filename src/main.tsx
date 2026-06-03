import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void) => number;
  cancelIdleCallback?: (handle: number) => void;
};

function DeferredAnalytics() {
  const [AnalyticsComponent, setAnalyticsComponent] = React.useState<React.ComponentType | null>(null);

  React.useEffect(() => {
    const loadAnalytics = () => {
      void import("@vercel/analytics/react").then(({ Analytics }) => {
        setAnalyticsComponent(() => Analytics);
      });
    };
    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(loadAnalytics);
      return () => idleWindow.cancelIdleCallback?.(handle);
    }

    const handle = window.setTimeout(loadAnalytics, 1200);
    return () => window.clearTimeout(handle);
  }, []);

  return AnalyticsComponent ? <AnalyticsComponent /> : null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <DeferredAnalytics />
  </React.StrictMode>,
);
