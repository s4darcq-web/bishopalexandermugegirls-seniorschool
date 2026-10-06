"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";

const MAX_PAGE_AGE_MS = 60 * 60 * 1000;

function subscribeToNetworkStatus(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);

  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

function getNetworkStatus() {
  return navigator.onLine;
}

function getServerNetworkStatus() {
  return true;
}

export default function PerformanceGuard({
  children,
}: {
  children: ReactNode;
}) {
  const isOnline = useSyncExternalStore(
    subscribeToNetworkStatus,
    getNetworkStatus,
    getServerNetworkStatus,
  );
  const wasOffline = useRef(false);

  useEffect(() => {
    const pageLoadedAt = Date.now();
    wasOffline.current = !navigator.onLine;

    const refreshIfExpired = () => {
      if (Date.now() - pageLoadedAt < MAX_PAGE_AGE_MS) return;

      if (navigator.onLine) {
        window.location.reload();
      }
    };

    const handleOffline = () => {
      wasOffline.current = true;
    };

    const handleOnline = () => {
      if (wasOffline.current) {
        wasOffline.current = false;
        window.location.reload();
        return;
      }

      refreshIfExpired();
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    document.addEventListener("visibilitychange", refreshIfExpired);

    const refreshTimer = window.setTimeout(
      refreshIfExpired,
      MAX_PAGE_AGE_MS,
    );

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
      document.removeEventListener("visibilitychange", refreshIfExpired);
    };
  }, []);

  if (!isOnline) {
    return (
      <main
        className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-foreground"
        role="status"
      >
        <div className="max-w-md">
          <h1 className="font-serif text-2xl font-semibold">
            You&apos;re offline
          </h1>
          <p className="mt-3 text-muted-foreground">
            This website is unavailable without an internet connection. It will
            reload automatically when you&apos;re back online.
          </p>
        </div>
      </main>
    );
  }

  return children;
}
