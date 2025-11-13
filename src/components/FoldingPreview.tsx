import React, { useEffect, useRef, useState } from "react";

type Props = {
  previewSeconds?: number;
  className?: string;
  // filename relative to project-root assets folder, e.g. 'white_folding_v.mp4' or 'white_weaving_v.mp4'
  videoFile?: string;
  // alt text for the video (used for aria-labels)
  alt?: string;
};

const FoldingPreview: React.FC<Props> = ({ previewSeconds = 3, className = "", videoFile = "white_folding_v.mp4", alt = "folding video" }) => {
  const previewRef = useRef<HTMLVideoElement | null>(null);
  const fullRef = useRef<HTMLVideoElement | null>(null);
  const [showFull, setShowFull] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const handlersRef = useRef<(() => void) | null>(null);

  // Use Vite's asset handling so the file is bundled/served correctly.
  // videoFile is relative to project-root/assets
  const videoSrc = new URL(`../../assets/${videoFile}`, import.meta.url).href;

  // Loop only the first `previewSeconds` seconds for the preview
  useEffect(() => {
    const v = previewRef.current;
    if (!v) return;

    // ensure it's muted and plays inline for mobile
    v.muted = true;
    v.playsInline = true;

    const onTime = () => {
      if (v.currentTime >= previewSeconds) {
        v.currentTime = 0;
        v.play().catch(() => {
          /* ignore playback errors */
        });
      }
    };

    v.addEventListener("timeupdate", onTime);

    // Try to autoplay the preview (muted autoplay is allowed on most devices).
    // If play fails (some browsers), wait for metadata then try again on user interaction.
    v.play().catch(() => {
      const onLoaded = () => {
        v.play().catch(() => {});
      };
      v.addEventListener("loadedmetadata", onLoaded, { once: true });
    });

    return () => v.removeEventListener("timeupdate", onTime);
  }, [previewSeconds]);

  // When showing the full video, pause the preview and attempt to play the full video.
  useEffect(() => {
    const preview = previewRef.current;
    const full = fullRef.current;
    if (showFull) {
      if (preview) {
        try {
          preview.pause();
        } catch (e) {
          /* ignore */
        }
      }
      if (full) {
        full.currentTime = 0;
        // Keep full video muted by default and prevent unmuting (we do not expose volume controls)
        full.muted = true;
        full.volume = 0;
        // Try to play; if blocked, play after metadata is loaded. Update playing state.
        full.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            const onLoaded = () => full.play().then(() => setIsPlaying(true)).catch(() => {});
            full.addEventListener("loadedmetadata", onLoaded, { once: true });
          });
        // wire time updates to show progress in custom controls
        const onTime = () => setCurrentTime(full.currentTime || 0);
        const onMeta = () => setDuration(full.duration || 0);
        full.addEventListener("timeupdate", onTime);
        full.addEventListener("loadedmetadata", onMeta);
        // store remover in a ref for cleanup
        const removeHandlers = () => {
          full.removeEventListener("timeupdate", onTime);
          full.removeEventListener("loadedmetadata", onMeta);
        };
        handlersRef.current = removeHandlers;
      }
    } else {
      if (full) {
        try {
          full.pause();
        } catch (e) {
          /* ignore */
        }
        // remove any attached handlers
        try {
          const remove = handlersRef.current;
          if (remove) remove();
          handlersRef.current = null;
        } catch (e) { /* ignore */ }
        setIsPlaying(false);
      }
      if (preview) {
        preview.currentTime = 0;
        // ensure preview remains muted
        preview.muted = true;
        preview.volume = 0;
        preview.play().catch(() => {
          const onLoaded = () => preview.play().catch(() => { /* ignore */ });
          preview.addEventListener("loadedmetadata", onLoaded, { once: true });
        });
      }
    }
  }, [showFull]);

  return (
    <div className={"folding-preview " + className}>
        <div
        className="relative w-full max-w-xl mx-auto cursor-pointer rounded-lg overflow-hidden shadow-lg"
        role="button"
        aria-label={`Play full ${alt}`}
        tabIndex={0}
        onClick={() => {
          setShowFull(true);
            // Attempt to play the full video shortly after modal mounts (user-initiated)
            setTimeout(() => {
              const f = fullRef.current;
              if (f) {
                // keep muted
                f.play().then(() => setIsPlaying(true)).catch(() => {});
              }
            }, 80);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
              setShowFull(true);
              setTimeout(() => {
                const f = fullRef.current;
                if (f) {
                  f.play().then(() => setIsPlaying(true)).catch(() => {});
                }
              }, 80);
          }
        }}
      >
        <video
          ref={previewRef}
          src={videoSrc}
          className="w-full h-auto object-cover"
          muted
          playsInline
          // no controls for preview
        />

        {/* clickable preview area: clicking anywhere opens full video (no centered play button) */}
        <div className="absolute inset-0 z-0" aria-hidden />
      </div>

      {/* Full-screen modal */}
      {showFull && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowFull(false)}
              className="absolute top-2 right-2 z-50 bg-white/90 rounded-full p-2 shadow-md"
              aria-label="Close full video"
            >
              ✕
            </button>

            <video
              ref={fullRef}
              src={videoSrc}
              className="w-full h-auto rounded-md"
              playsInline
              autoPlay
              muted
            />
            {/* custom simple controls (no volume) */}
            <div className="absolute bottom-2 left-4 right-4 flex items-center gap-3 z-50">
              <button
                onClick={() => {
                  const f = fullRef.current;
                  if (!f) return;
                  if (isPlaying) {
                    f.pause();
                    setIsPlaying(false);
                  } else {
                    f.play().then(() => setIsPlaying(true)).catch(() => {});
                  }
                }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="bg-white/90 rounded-full p-2 shadow"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 19h4V5H6v14zM14 5v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" />
                  </svg>
                )}
              </button>
              <div className="flex-1 bg-white/20 h-2 rounded overflow-hidden">
                <div
                  className="bg-white h-full"
                  style={{ width: duration ? `${(currentTime / duration) * 100}%` : "0%" }}
                />
              </div>
              <div className="text-white text-xs">
                {Math.floor(currentTime)}/{Math.floor(duration)}s
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoldingPreview;
