import { useEffect, useState } from "react";

export type UseMenuOpenProps = {
  refValue: React.RefObject<HTMLDivElement>;
  //   setOpen: (open: boolean) => void;
};

const useMenuOpen = ({ refValue }: UseMenuOpenProps) => {
  const [open, setOpen] = useState(false);

  // close panel when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refValue.current &&
        !refValue.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // clearing event after component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { open, setOpen };
};

export default useMenuOpen;
