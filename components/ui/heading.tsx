interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className="uppercase font-semibold text-sm tracking-widest pb-5">
      {text}
    </h1>
  );
};

export { Heading };
