export default function NodeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${className}`}
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M1 8h22v7h-12v2h-4v-2h-6z'></path>
      <path d='M7 8v7'></path>
      <path d='M14 8v7'></path>
      <path d='M17 11v4'></path>
      <path d='M4 11v4'></path>
      <path d='M11 11v1'></path>
      <path d='M20 11v4'></path>
    </svg>
  );
}
