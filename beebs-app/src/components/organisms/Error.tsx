"use client";

interface ErrorProps {
  errorMessage: string | null;
}

export const Error = ({ errorMessage }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center flex-col h-screen w-full text-3xl">
      <h1>Erreur {errorMessage}</h1>
      <p> Nous n&apos;avons pas pu récuperer la page demander</p>
    </div>
  );
};
