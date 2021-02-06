# Blog - Module 120 + 152 (Frontend)

Pour utiliser le frontend Angular, l'API web est également nécessaire. Clonez-la depuis le repo : https://github.com/BurkhalterY/EPSIC_Blog_326-151_Backend

Pour lancer le tout :

Dans le répertoire du backend, exécutez la commande :

`dotnet run`

Pensez à autoriser la connexion la première fois, car il n'y a pas de certificat SSL et donc les requêtes n'aboutirons pas.

Dans le répertoire du frontend, exécutez les commandes :

`npm i` (la première fois)

puis

`ng s`

Le site est accessible via cette URL : http://localhost:4200/

Il y a une base de données préremplie avec quelques données. Dont un compte utilisateur sans privilèges et un administrateur. Les logins sont visibles sur la page de connexion.

Liste des features :

Hors connexion :
 + Lire les articles et les commentaires
 + Se connecter/ s'inscrire
 
Utilisateurs :
 + Écrire un article
 + Écrire un commentaire
 + Modifier et supprimer uniquement ses propres articles et commentaires

Administrateurs :
 + Modifier et supprimer n'importe quel article ou commentaire
 + Changer le mot de passe d'un utilisateur
 + Modifier l'avatar d'un utilisateur
 + Activer ou désactiver les droits d'administrateur d'un utilisateur (lui compris, donc attention à ce qu'il reste toujours au moins un admin car il n'y a pas de contrôle pour ça dans le backend)
 
(voir le use case dans l'autre repo)

**⚠ Remarque** : le login n'est pas sécurisé. C'est-à-dire qu'après votre première connexion, votre ID est stocké dans votre navigateur et est ensuite utilisé pour toutes les requêtes à l'API. Il est donc extrêmement facile d'usurper l'identité d'un utilisateur.

Burkhalter Yannis INFO3E (2021)
