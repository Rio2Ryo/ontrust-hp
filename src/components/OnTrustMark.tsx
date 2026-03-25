export default function OnTrustMark() {
  return (
    <div className="flex justify-center md:justify-start mb-4 -mt-1">
      <svg
        width="180"
        height="24"
        viewBox="0 0 180 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="onTrust logo mark"
        className="drop-shadow-[0_4px_12px_rgba(79,70,229,0.12)]"
      >
        <path
          d="M6 17.5C18 9.5 33 7 48 8.5C58.5 9.5 66 12.5 77 12.5C88.5 12.5 97 8.2 107.5 7.2C120.5 5.9 134 9 146 14.2"
          stroke="url(#paint0_linear)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M38 17.2C47 15 54 14.6 62.5 15.4C71.5 16.3 78 19 87 19C98 19 107 14.3 118.5 13.6C127.5 13 136.5 14.8 145 18"
          stroke="url(#paint1_linear)"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx="78" cy="12.5" r="2.7" fill="#4F46E5" />
        <circle cx="87" cy="19" r="2.3" fill="#818CF8" />
        <defs>
          <linearGradient id="paint0_linear" x1="6" y1="12" x2="146" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4338CA" />
            <stop offset="0.45" stopColor="#4F46E5" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="38" y1="16.5" x2="145" y2="16.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818CF8" />
            <stop offset="1" stopColor="#4338CA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
