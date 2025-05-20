"use client"

import { useState, useRef, useEffect } from "react"

export function useVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    video.addEventListener("ended", handleEnded)
    return () => {
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return {
    videoRef,
    isPlaying,
    togglePlay,
  }
} 