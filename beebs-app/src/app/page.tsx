// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">
        Bienvenue sur la page daccueil
      </h1>
      <p className="text-lg mb-6">Découvrez les événements à venir à Paris.</p>
      <Link href="/events">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-600 transition-colors">
          Voir les événements
        </button>
      </Link>
    </div>
  );
}
