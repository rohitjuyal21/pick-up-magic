function LoadingHeart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 29.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path
        d="M23.6,2.4c-2.6,0-5,1.2-6.6,3.1C15.4,3.6,13,2.4,10.4,2.4C5.9,2.4,2,6.3,2,10.8
            c0,4.3,3.4,7.5,8.6,12.3c1.5,1.4,3.1,2.9,4.8,4.5c0.4,0.4,1,0.4,1.4,0c1.7-1.6,3.3-3.1,4.8-4.5c5.2-4.8,8.6-8,8.6-12.3
            C30,6.3,26.1,2.4,23.6,2.4z"
        strokeDasharray="100"
        strokeDashoffset="100"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="100"
          to="0"
          dur="1s"
          keySplines="0.25 0.1 0.25 1"
          calcMode="spline"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

export default LoadingHeart;
