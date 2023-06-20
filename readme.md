## Contexte du projet
Votre DSI vous propose de créer une première version de leur future application de gestion des salariés de votre entreprise, vous commencez seul sur ce projet mais des collègues vous rejoindrons lors des prochains sprint. Durant le premier sprint il vous attribue les taches suivantes :

​

### Détails

En tant que RH, je veux pouvoir visualiser l'ensemble des salariés de l'entreprise dans un tableau afin d'avoir une vue d'ensemble et accèder rapidement aux informations importantes : Nom, Prenom, Télephone personnel, Email
En tant que RH, je veux pouvoir accéder à la fiche d'un salarié afin de pouvoir visualiser l'ensemble des informations de ce salarié
En tant que RH, je veux pouvoir ajouter un nouveau salarié
En tant que RH, je veux pouvoir modifier la fiche d'un salarié existant afin de pouvoir modifier l'ensemble de ses informations
En tant que RH, je veux pouvoir supprimer la fiche d'un salarié
Un import de notre outil actuel vous est fourni pour avoir une base pour votre base de données
Dockeriser votre application
Rédiger la documentation d'acceuil d'un nouveau développeur sur l'application
​

## Contrainte technique

### Technologies:

Python
Serveur d'API : Django / FastAPI / Hug
Technologie Front :

Falk / VueJS / SolidJS
Vuetify / TailwindCSS
BDD :

PostgreSQL / MySQL
Versionning :

Git avec GitHub
Container :

Docker
Docker-compose
​

Vous pouvez utiliser les images officielles

# Setup frontend

    cd frontend
    npm install 
    npm run dev

Se rendre sur l'url http://localhost:3000/

# Setup backend 
    
    cd backend
    py -m venv .venv
## Lancer l'environement virtuel
    
- Linux

        source .venv/bin/activate
          
- Windows

        .venv/Script/activate.bat

## Installation des dépendances

    pip install -r requirements.txt

## Mise en place des var d'environement
Sous linux se rendre dans le fichier .venv/bin/activate et rajouter à la fin du fichier

    export CONNECTION_URL=postgresql://user:password@host:port/database

Ne pas ouiblié de remplacer les chaine user, password, host, port & database

## Lancer une migration et peuplé la BDD avec des données du CSV

    py database/migration.py
    py database/fill_database.py

## Lancer le serveur 

    hug -f server.py