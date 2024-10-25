import { Button } from "@mui/material";
import Link from "next/link";
import { ButtonProps } from "@/types/interface";

export const CustomButton = ({ label, onClick, link }: ButtonProps) => {
  return link ? (
    <Link href={link} target="_blank">
      <Button>{label}</Button>
    </Link>
  ) : (
    <Button onClick={onClick}>{label}</Button>
  );
};
