import { Button } from "@mui/material";
import Link from "next/link";
import { ButtonProps } from "@/types/interface";

export const CustomButton = ({ label, onClick, link }: ButtonProps) => {
  return link ? (
    <Button>
      <Link href={link} target="_blank">
        {label}
      </Link>
    </Button>
  ) : (
    <Button onClick={onClick}>{label}</Button>
  );
};
