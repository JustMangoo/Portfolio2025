export function NavMarker() {
  return (
    <div className="flex items-center text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="14"
        viewBox="0 0 5 14"
        fill="currentColor"
      >
        <path d="M2.784 13.32H0V0.68H2.784V13.32ZM4.592 13.32H0V10.856H4.592V13.32ZM4.592 3.144H0V0.68H4.592V3.144Z" />
      </svg>
      <div className=" h-1 w-1 bg-transparent transition-colors group-hover:bg-current" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="14"
        viewBox="0 0 6 14"
        fill="currentColor"
      >
        <path d="M2.4.68H5.184V13.32H2.4V.68ZM.592.68H5.184V3.144H.592V.68ZM.592 10.856H5.184V13.32H.592V10.856Z" />
      </svg>
    </div>
  );
}
