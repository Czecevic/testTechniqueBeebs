import { CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <CircularProgress color="inherit" />
    </div>
  );
};
