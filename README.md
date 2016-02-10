# Natal

## Description
Système pour formation en JavaScript. **Natal** est un outil permettant de contrôller l'inscription à des événements où les participants doivent former des groupes qui seront assis à des tables.

Ce projet est développé dans le cadre de la Formation sur le JavaScript moderne du GIJS de CGI à Québec (voir dépôt du cours). Il fait office de projet de mi-session.

## Architecture
**Natal** suit une architecture MEAN (MongoDB, Express, AngularJS et NodeJS) traditionnelle, soit:

* Single Page Application (Angular + ngRoute)
* Communication Front-end/Back-end via Web Services REST (JSON) (Express + Node)
* Persistence de documents non-liés/non-relationnels (MongoDB)

Le but étant d'expérimenter avec les différents outils offerts par les différents frameworks. Une structure de base du code a été implémentée afin de guider les participants.

Aucune authentification n'est nécessaire pour accéder à l'application. Pour les fins de formations, aucune sécurité n'es nécessaire.

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

**Exemple**
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
  
  "inscriptions": [{...}, {...}]
}</code></pre>
