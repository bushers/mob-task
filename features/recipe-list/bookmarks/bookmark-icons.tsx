interface BookmarkIconProps {
  numberOfBookMarks: number;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ numberOfBookMarks }) => {
  return (
    <div className="relative justify-self-end">
      {numberOfBookMarks > 0 ? (
        <div className="absolute bg-destructive flex items-center justify-center rounded-full w-[13px] h-[13px] top-[-4px] right-[-6px]">
          <span className="text-white text-2xs">{numberOfBookMarks}</span>
        </div>
      ) : null}
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8519 1.41466C12.7927 1.53021 13.4829 2.38694 13.4829 3.3872V17.3738L7.06846 13.9884L0.654053 17.3738V3.3872C0.654053 2.38694 1.34339 1.53021 2.28502 1.41466C5.46331 1.02523 8.67361 1.02523 11.8519 1.41466Z"
          fill="#404040"
          stroke="#404040"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

interface BookmarkCircleProps {
  isSelected: boolean;
}

const BookmarkCircle: React.FC<BookmarkCircleProps> = ({ isSelected }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="12.5" fill="#404040" />
      <path
        d="M15.5517 7.765C16.1519 7.83484 16.5923 8.35264 16.5923 8.95721V17.4107L12.5 15.3646L8.40775 17.4107V8.95721C8.40775 8.35264 8.84753 7.83484 9.44827 7.765C11.476 7.52963 13.5241 7.52963 15.5517 7.765Z"
        stroke="#FAFAFA"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isSelected ? "#FAFAFA" : undefined}
      />
    </svg>
  );
};

export { BookmarkIcon, BookmarkCircle };
