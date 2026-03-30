import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = localStorage.getItem("pwa-install-dismissed-founders-kitchen");
    if (wasDismissed) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem("pwa-install-dismissed-founders-kitchen", "1");
  };

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:w-80">
      <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-4 flex items-start gap-3 border border-gray-200">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">Add Founders Kitchen to Home Screen</p>
          <p className="text-xs text-gray-500 mt-0.5">Install for faster access and offline use.</p>
        </div>
        <div className="flex gap-2 shrink-0 mt-0.5">
          <button
            onClick={handleInstall}
            className="text-xs font-semibold text-white px-3 py-1.5 rounded-lg transition-colors"
            style={{ backgroundColor: "#E8394A" }}
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-gray-400 hover:text-gray-700 px-2 py-1.5 transition-colors"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
