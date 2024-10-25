import Link from "next/link";

export default function Custom404() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center flex flex-col">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">
          Oops! vous n&#39;êtes pas sur la bonne page
        </p>
        <Link
          href="/"
          className="mt-6 text-lg text-black bg-slate-100 rounded-lg p-5 transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white"
        >
          Retourner à l&#39;accueil
        </Link>
      </div>
    </div>
  );
}
