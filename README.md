# Gestion de Banque Microservices

## Introduction
Ce projet est une application de gestion bancaire basée sur une architecture de microservices. Chaque microservice est responsable d'une fonctionnalité spécifique, ce qui permet de dispenser une meilleure scalabilité et维护.

## Fonctionnalités
- **Gestion des utilisateurs** : Inscription et authentification des clients.
- **Gestion des comptes** : Création, mise à jour et suppression des comptes bancaires.
- **Transactions** : Réalisation des transactions (dépôts, retraits, transferts).
- **Historique des opérations** : Consultation des opérations anciennes et récentes par les utilisateurs.
- **Notifications** : Envoi d'notifications aux utilisateurs pour des événements importants.

## Technologies Utilisées
- **Node.js** pour le développement des microservices.
- **MongoDB** comme base de données.
- **RabbitMQ** pour la communication entre microservices.
- **Docker** pour la conteneurisation des services.

## Installation
1. Clonez le dépôt : `git clone https://github.com/username/gestion-de-banque-microservices.git`
2. Accédez au répertoire du projet : `cd gestion-de-banque-microservices`
3. Installez les dépendances : `npm install`
4. Lancez les services : `docker-compose up`

## Contribution
Les contributions sont les bienvenues ! Merci de soumettre une demande d'extraction avec vos améliorations.

## License
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.