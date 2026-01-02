"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  href: string;
  title: string;
  subtitle: string;
  screenshotUrl: string;
  useScreenshotApi?: boolean;
  localImagePath?: string;
}

function getScreenshotApiUrl(url: string): string {
  // Using htmlcsstoimage.com - free tier, no API key needed for basic usage
  // Alternative: Use a simple proxy or just show placeholder
  return `https://htmlcsstoimage.com/demo_run?url=${encodeURIComponent(url)}`;
}

export function ProductCard({ href, title, subtitle, screenshotUrl, useScreenshotApi = false, localImagePath }: ProductCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.15);
  const [iframeError, setIframeError] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const scaleValue = width / 1920;
        setScale(scaleValue);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const imageUrl = useScreenshotApi ? getScreenshotApiUrl(screenshotUrl) : null;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="group overflow-hidden border-zinc-200 bg-white/50 backdrop-blur-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-zinc-700 sm:flex sm:gap-0">
        <CardContent
          ref={containerRef}
          className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 p-0 sm:w-64 sm:shrink-0 dark:bg-zinc-900"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent dark:from-zinc-950/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)]" />
          <div className="relative h-full w-full overflow-hidden">
            {useScreenshotApi || iframeError || localImagePath ? (
              imageError && !localImagePath ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                  <div className="text-center">
                    <ExternalLink className="mx-auto mb-2 h-8 w-8 text-zinc-400 dark:text-zinc-600" />
                    <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{title}</p>
                    <p className="mt-1 text-[10px] text-zinc-500 dark:text-zinc-500">Click to visit</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={localImagePath || imageUrl || getScreenshotApiUrl(screenshotUrl)}
                  alt={`${title} preview`}
                  fill
                  className="object-cover object-top"
                  unoptimized
                  sizes="256px"
                  onError={() => setImageError(true)}
                />
              )
            ) : (
              <iframe
                src={screenshotUrl}
                className="absolute left-1/2 top-1/2 h-[1080px] w-[1920px] origin-center opacity-100 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  pointerEvents: "none",
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  transformOrigin: "center center",
                }}
                title={`${title} preview`}
                onError={() => setIframeError(true)}
              />
            )}
          </div>
        </CardContent>
        <div className="flex flex-1 flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                {title}
              </CardTitle>
              <ExternalLink className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-zinc-600 dark:group-hover:text-zinc-400" />
            </div>
            <CardDescription className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {subtitle}
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
}

