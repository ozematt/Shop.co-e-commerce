type DetailsButtonProps = {
  onClick: () => void;
  details: string;
  children: string;
  title: string;
};

const DetailsButton = ({
  onClick,
  details,
  children,
  title,
}: DetailsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="duration-600 w-[50%] border-b-2 py-6 font-satoshi text-xl opacity-60 transition ease-in-out hover:border-b-black hover:font-bold hover:opacity-100"
      style={
        details === title
          ? {
              opacity: "1",
              fontWeight: "bold",
              borderBottom: "2px solid black",
            }
          : undefined
      }
    >
      {children}
    </button>
  );
};

export default DetailsButton;
