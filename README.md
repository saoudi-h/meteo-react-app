# Application Météo

Bienvenue dans l'application météo ! Ce projet a été développé pour mettre en pratique mes compétences en développement web, en particulier avec les technologies React, Redux, et d'autres bibliothèques connexes. L'objectif principal de ce projet est de créer une application qui affiche les prévisions météorologiques pour une ville donnée.

## Fonctionnalités

## Fonctionnalités

| Fonctionnalité                                         | État               |
| ------------------------------------------------------ | ------------------ |
| Affichage des prévisions météorologiques actuelles    | :white_check_mark: |
| Utilisation de l'API OpenWeatherMap                   | :white_check_mark: |
| Gestion de l'état global avec Redux                   | :hourglass: |
| Utilisation de React Router                           | :white_check_mark: |
| Option de mode sombre                                 | :white_check_mark: |
| Ajout d'animations avec react-spring                  | :white_check_mark: |
| Géolocalisation pour obtenir rapidement la météo      | :hourglass:       |
| Sauvegarde des résultats météo précédents             | :hourglass:       |
| Sécurisation des clés API via un serveur backend      | :hourglass:       |

## Installation

1. Clonez ce dépôt sur votre machine locale.
    ```bash
    git clone https://github.com/saoudi-h/meteo-react-app.git
    ```
2. Accédez au répertoire du projet :

    ```bash 
    cd meteo-react-app
    ```
3. Installez les dépendances : 
    ```bash
    npm install
    ```

## Configuration de la Clé API

Pour utiliser l'application, vous devrez fournir une clé API valide d'OpenWeatherMap. 

Vous pouvez soit utiliser votre propre clé, soit en générer une sur le site d'OpenWeatherMap.

1. Copiez le fichier `.env.example` et renommez-le en `.env`.
2. Remplir `REACT_APP_WEATHER_TOKEN=` par votre propre clé API dans le fichier `.env`.

## Démarrage de l'Application

Une fois que vous avez configuré votre clé API, vous pouvez démarrer l'application en exécutant la commande suivante :


```bash
npm start

```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez ajouter de nouvelles fonctionnalités, améliorer le code existant ou résoudre des problèmes, n'hésitez pas à ouvrir une demande de pull.

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).

---

![Développé par Hakim Saoudi dans le cadre de sa formation de concepteur développeur d'application.
](https://raw.githubusercontent.com/saoudi-h/javaUtils/main/images/hakimsaoudi_javaUtils.png)