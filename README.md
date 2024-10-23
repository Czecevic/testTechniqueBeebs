# Test Technique - Beebs

### Description du Projet

Ce projet récupère les événements et activités à venir à Paris via l'API "Que Faire à Paris?". Il permet aux utilisateurs de consulter, trier et filtrer ces événements selon différents critères, notamment :

- Tri par ordre alphabétique (A-Z / Z-A)
- Tri par date (du plus récent au plus ancien / du plus ancien au plus récent)
- Filtrage par tags

Chaque événement est cliquable et offre des informations détaillées, telles qu'un lien vers la billetterie ou une description de l'événement.

### Technologies Utilisées

- Framework : Next.js
- Langage : TypeScript
- Front-end : React
- API : Utilisation de l'API publique "Que Faire à Paris?" pour récupérer les données des événements
- CSS : Tailwind

### Installation et Utilisation

- Clonez le dépôt Git du projet : `git clone <URL_DU_DEPOT>`
- Accéder au projet : `cd beebs-app`
- Installez des dépendances : `npm install` / `npm i`.
- Créez un fichier .env.local à la racine du projet et ajoutez-y la clé suivante pour configurer l'URL de l'API : `NEXT_PUBLIC_API_URL="https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?refine=date_end%3A%22"`
- Lancez l'application : `npm run dev`.
- Accéder à l'application :
  Ouvrez votre navigateur et accédez à l'URL suivante : `http://localhost:3000/`

### Fonctionnalités Clés

##### Recherche

Trouvez des événements spécifiques en fonction de leur nom ou de leurs tags.

##### Tri dynamique

Les utilisateurs peuvent trier les événements par nom ou date.

##### Filtrage par Tags

Affichez uniquement les événements correspondant à certains tags.

##### Navigation et Détails

Chaque événement est cliquable, menant à des informations détaillées telles que des liens vers la billetterie et des descriptions.
