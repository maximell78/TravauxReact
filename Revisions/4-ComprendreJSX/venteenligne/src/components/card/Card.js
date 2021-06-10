import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/150/000000/FFFFFF/?text=PortHub"
        alt="Avatar"
      />
      <div className="container">
        <h4>
          <b>Port Hub</b>
        </h4>
        <p>
          À propos de cet article Connexion pratique : cet adaptateur USB C
          comble l'écart entre USB-A et USB-C pour connecter des appareils plus
          anciens à vos ordinateurs portables USB C. Grande performance : avec 4
          ports USB 3.0 avec une large compatibilité y compris câble USB, clé
          USB, souris, clavier, etc. Données SuperSpeed – Transformez un seul
          port USB C en quatre ports USB 3.1 Gen 1 (USB 3.0) avec des taux de
          transfert de données allant jusqu'à 5 Gbit/s, assez rapide pour
          transférer un film HD en quelques secondes. Compact et léger – La
          taille du paquet vous permet de l'emporter en déplacement, idéal pour
          la maison, le bureau, les voyages d'affaires ou partout où vous allez.
          Connectez votre ordinateur portable et accédez à vos appareils USB à
          tout moment. Facile à installer : ce hub ne nécessite aucun logiciel
          ou pilote pour démarrer. Il suffit de le brancher sur le port USB-C de
          votre ordinateur portable. Il sera plus facile de connecter et de
          transférer des données entre les appareils. Chargement non pris en
          charge : ne pas utiliser ce hub à des fins de chargement, non
          recommandé pour charger des tablettes et d'autres appareils avec une
          forte consommation d'énergie. Remarque : vérifiez le courant de
          chargement de votre appareil lors de l'utilisation de la charge (par
          exemple iPad/tablettes) ou pour les appareils à haute puissance (par
          exemple disque dur) - Un courant insuffisant peut conduire à une
          charge lente ou à d'autres pannes.
        </p>
      </div>
    </div>
  );
}

export default Card;
