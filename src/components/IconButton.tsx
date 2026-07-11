import Link from "next/link";

export function IconButton({
  href,
  label,
  icon,
  download,
}: {
  href: string;
  label: string;
  icon: "linkedin" | "download";
  download?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
      aria-label={label}
      title={label}
      className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {icon === "linkedin" ? <LinkedinIcon /> : <DownloadIcon />}
    </Link>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <path
        d="M6.94 8.5H3.56V20.5H6.94V8.5Z"
        fill="currentColor"
      />
      <path
        d="M5.25 6.94C6.32 6.94 7.19 6.07 7.19 5C7.19 3.93 6.32 3.06 5.25 3.06C4.18 3.06 3.31 3.93 3.31 5C3.31 6.07 4.18 6.94 5.25 6.94Z"
        fill="currentColor"
      />
      <path
        d="M13.72 8.5H10.5V20.5H13.72V14.31C13.72 12.6 14.38 11.28 15.94 11.28C17.44 11.28 17.94 12.28 17.94 14.19V20.5H21.16V13.5C21.16 10.24 19.53 8.22 16.62 8.22C14.75 8.22 13.72 9.06 13.72 9.06V8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <path
        d="M12 3.5V15.5M12 15.5L7 10.5M12 15.5L17 10.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17.5V19C4 19.83 4.67 20.5 5.5 20.5H18.5C19.33 20.5 20 19.83 20 19V17.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
