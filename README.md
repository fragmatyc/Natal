# Natal

## Description
Système pour formation en JavaScript. **Natal** est un outil permettant de contrôler l'inscription à des événements où les participants doivent former des groupes qui seront assis à des tables.

Ce projet est développé dans le cadre de la Formation sur le JavaScript moderne du GIJS de CGI à Québec (voir dépôt du cours). Il fait office de projet de mi-session.

## Architecture
**Natal** suit une architecture MEAN (MongoDB, Express, AngularJS et NodeJS) traditionnelle, soit:

* Single Page Application (Angular + ngRoute)
* Communication Front-end/Back-end via Web Services REST (JSON) (Express + Node)
* Persistence de documents non-liés/non-relationnels (MongoDB)

Le but étant d'expérimenter avec les différents outils offerts par les différents frameworks. Une structure de base du code a été implémentée afin de guider les participants.

Aucune authentification n'est nécessaire pour accéder à l'application. Pour les fins de formations, aucune sécurité n'est à implémenter.

## Structure des dossiers
Cette section contient la liste des dossiers ainsi qu'une description de leur fonction principale.

### backend
Ce répertoire contient tout ce qui a trait à la partie serveur du projet. À sa racine, il contient des sous-répertoires correspondant aux objets du domaine (DDD), puis un répertoire <code>routes</code> qui contient un méthode d'initialisation des routes.

Le backend contient:

* La définition des routes (REST Controller), qui définissent les chemins URL auxquels le serveur répond et font le pont entre la requête <code>http</code> et la couche service.
* Une couche service pour l'application des règles d'affaires.
* Une couche d'accès aux données pour abstraire la partie propre à l'accès à la banque de données (Repository Pattern ou Data Accessor Object Pattern).
* La définition des modèles de données (entitées)

### frontend
#### src
Ce répertoire contient le code Angular MVC et est structuré comme le backend, soit inspiré du DDD. Le frontend contient:

* Des vues HTML pour afficher les données
* Des controlleurs permettant de répondre aux actions de la vue par l'utilisateur
* Une couche service permettant d'accéder aux données du backend (communication AJAX/XHR)

Grunt est utilisé pour compilé le code JavaScript propre à l'application (minification, empaquetage). Une fois compilée, l'application est copié dans le répertoire <code>frontend/build</code>.

## Grunt
Grunt effectue les tâches suivantes:
* Supprime le répertoire <code>build</code>
* Copie des dépendences de Bower
* Compilation du code JS (uglify/merge)
* Copie des fichiers statiques de l'application (CSS/images/vue html/polices)

## Objets du domaine
### Inscription
Une <code>Inscription</code> est un objet correspondant à l'inscription d'une personne à une table spécifique. Chaque inscription peut être jumelée à une deuxième inscription qui correspond à son/sa conjoint(e).

**Exemple:**
<pre><code>{
  "lastName": "Cloutier", 
  "firstName": "Sylvain",
  "emailAddress": "sylvain.s.cloutier@cgi.com",
  "employeeNumber": "105170",
  "membreOfSocialClub": "true",
  "spouse": {
    "lastName": "Doucet",
    "firstName": "Ariane",
    "emailAddress": "missdoudou@gmail.com",
    "employeeNumber": undefined,
    "membreOfSocialClub": "false"
  }
}</code></pre>

### Table
Une <code>Table</code> est un objet qui correspond à un groupe d'inscriptions limité à un nombre total de places disponibles. Elle est aussi régie par un responsable qui correspond à une <code>Inscription</code> en soit.

Elles peuvent aussi être liées à plusieurs autres tables afin de créer une chaîne de tables rapprochées physiquement lors de l'événement.

**Exemple:**
<pre><code>{
  "name": "SuperTable",
  "nbMaxInscription": 10,
  "responsible": {
      "lastName": "Cloutier", 
      "firstName": "Sylvain",
      "emailAddress": "sylvain.s.cloutier@cgi.com",
      "employeeNumber": "105170",
      "membreOfSocialClub": "true",
      "spouse": {
        "lastName": "Doucet",
        "firstName": "Ariane",
        "emailAddress": "missdoudou@gmail.com",
        "employeeNumber": undefined,
        "membreOfSocialClub": "false"
      }
    },
  
  "inscriptions": [{...}, {...}],
  "tableLinks": [{...}, {...}]
}</code></pre>

## Services à offrir
Voici la liste des services qui doivent être offert par l'application:
* Créer/Mettre à jour une table
  * Différencier la mise à jour et la création grace au champs <code>_id</code> généré par MongoDB. L'objet JSON est passé en paramètre et persisté dans la banque de données. Pour toutes les inscriptions de la table, valider si une inscription existe déjà (propriété <code>_id</code> afin de la mettre à jour le cas échéant ou de la créer le cas contraire).
* Obtenir la liste de toutes les tables
  * Sans paramètre, ce service permet d'obtenir toutes les tables de la banque de données.
* Obtenir la liste des tables liées
  * Avec le <code>_id</code> d'une table en paramètre, retrouver la liste de toutes les tables qui y sont liées.
* Créer/Mettre à jour une inscription
  * Différencier la mise à jour et la création grace au champs <code>_id</code> généré par MongoDB. L'objet JSON est passé en paramètre et persisté dans la banque de données. 
* Obtenir une inscription par numéro d'employé
  * Grace au numéro d'employé passé en paramètre, obtenir l'inscription correspondante.
* Obtenir la liste de toutes les inscriptions
  * Sans paramètre, ce service permet d'obtenir toutes les inscriptions de la banque de données.
* Autre?

## Créer un environnement de développement
### Prérequis
* Node.js
* MongoDB
* mongo-express
* Grunt installé globalement
* Bower installé globalement
* Un EDI
* Le chemin du répertoire <em>bin</em> de MongoDB dans la variable d'environnement <code>PATH</code>

### Obtention du code
<code>git clone https://github.com/fragmatyc/Natal.git</code>

### Téléchargement des dépendences
#### Backend
<code>npm install</code>

#### Frontend
<code>bower install</code>

### Compilation
<code>grunt</code>

## Ressources
* https://material.angularjs.org/latest/
* http://getbootstrap.com/
* https://docs.angularjs.org/api
* http://expressjs.com/en/starter/basic-routing.html
* http://mongoosejs.com/docs/guide.html
* https://docs.mongodb.org/manual/

## Défis pour les crinqués
* Créer un <code>Repository</code> commun pour les opérations <code>findAll</code> et <code>findById</code>.
* Créer un <code>Service</code> commun pour interfacer avec le repository commun.
* Utiliser <code>ngAnimate</code> pour animer le changement de vue.
* Créer des directives angular pour les différentes sections (Menu, Toolbar, formulaires, etc.)
