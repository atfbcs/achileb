export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="achile"
      className={className}
    >
      <rect
        x="22"
        y="5"
        width="20"
        height="20"
        rx="4"
        fill="currentColor"
        transform="rotate(45 32 15)"
      />
      <rect
        x="39"
        y="22"
        width="20"
        height="20"
        rx="4"
        fill="#ff5b1f"
        transform="rotate(45 49 32)"
      />
      <rect
        x="22"
        y="39"
        width="20"
        height="20"
        rx="4"
        fill="currentColor"
        transform="rotate(45 32 49)"
      />
      <rect
        x="5"
        y="22"
        width="20"
        height="20"
        rx="4"
        fill="currentColor"
        transform="rotate(45 15 32)"
      />
    </svg>
  )
}
