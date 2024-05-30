import React from 'react'
import './About.sass'
import Meta, { MetaProps } from '../../components/utility/Meta'

const About = () => {
  const metaProps: MetaProps = {
    title: 'A propos',
    description: 'A propos de nous et My Weather APP',
    ogSrc: '/og/og_image.png',
    keyWord: 'info, MyWeather, météo, prévisions, about'
  }
  return (
    <>
      <Meta {...metaProps} />
      <main className="main about">
        <section className="about-section-container">
          <div className="about-section">
            <h1>My Weather</h1>
            <p>
              Une application web conçue pour vous offrir des informations météorologiques précises
              et des images de villes du monde entier. Que vous souhaitiez vérifier la météo de
              votre ville actuelle grâce à la géolocalisation ou explorer les conditions
              météorologiques dans une autre ville, My-Weather vous facilite la tâche avec une
              interface élégante et intuitive.
            </p>
            <h3>Fonctionnalités Clés</h3>
            <ul>
              <li>
                <strong>Recherche de Villes</strong> : Recherchez la météo de n'importe quelle ville
                en saisissant simplement son nom.
              </li>
              <li>
                <strong>Géolocalisation</strong> : Obtenez instantanément la météo de votre
                emplacement actuel.
              </li>
              <li>
                <strong>Images de Villes</strong> : Admirez des photos magnifiques de villes
                récupérées aléatoirement via l'API Unsplash.
              </li>
              <li>
                <strong>Gestion des Cartes</strong> : Affichez plusieurs cartes météo côte à côte
                pour comparer facilement les conditions météorologiques dans différentes villes.
                Vous pouvez également actualiser les données ou supprimer une carte.
              </li>
              <li>
                <strong>Thèmes Sombre et Clair</strong> : Alternez entre les modes sombre et clair
                selon vos préférences.
              </li>
              <li>
                <strong>Notifications</strong> : Recevez des notifications en cas d'erreur ou de
                succès lors des actions.
              </li>
            </ul>
            <h3>Technologies Utilisées</h3>
            <ul>
              <li>
                <p>
                  <strong>Front-End</strong> :
                </p>
                <ul>
                  <li>
                    <strong>React</strong> avec create-react-app pour la structure de l'application.
                  </li>
                  <li>
                    <strong>Redux</strong> pour la gestion de l'état global.
                  </li>
                  <li>
                    <strong>React Router</strong> pour la navigation entre les pages.
                  </li>
                  <li>
                    <strong>React Spring</strong> pour les animations fluides.
                  </li>
                  <li>
                    <strong>Sass</strong> pour un style organisé et personnalisé.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>APIs</strong> :
                </p>
                <ul>
                  <li>
                    <strong>OpenWeatherMap</strong> pour les données météorologiques.
                  </li>
                  <li>
                    <strong>Unsplash</strong> pour les images des villes.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Back-End</strong> :
                </p>
                <ul>
                  <li>
                    <strong>Fonctions Serverless</strong> hébergées sur Vercel pour sécuriser les
                    clés API et gérer les communications avec les services externes.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Outils de Développement</strong> :
                </p>
                <ul>
                  <li>
                    <strong>Prettier</strong> et <strong>ESLint</strong> pour le formatage et la
                    qualité du code.
                  </li>
                  <li>
                    <strong>Husky</strong> avec <strong>Lint-Staged</strong> pour les hooks Git.
                  </li>
                  <li>
                    <strong>GitHub</strong> pour le versionnement et le CI/CD.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Objectifs et Motivations</h3>
            <p>
              My-Weather a été développé principalement comme un projet d'apprentissage pour
              explorer et maîtriser diverses technologies modernes de développement web.
              L'application n'a pas vocation à être commercialisée, mais sert de démonstration de
              compétences et de créativité.
            </p>
            <h3>Je suis</h3>
            <p>
              Hakim SAOUDI, un développeur web passionné basé en France. J'ai conçu My-Weather pour
              tester de nouvelles technologies et améliorer mes compétences en développement
              front-end et back-end. Vous pouvez découvrir plus de mes projets et en savoir plus sur
              mon parcours professionnel sur{' '}
              <a
                href="https://hakimsaoudi.dev/"
                target="_new"
                rel="noreferrer"
                className="link-accent"
              >
                hakimsaoudi.dev
              </a>
              .
            </p>

            <br />
            <h2>Mentions légales</h2>
            <h3 id="use-local-storage">Utilisation du stockage local</h3>
            <p>
              Cette application utilise le stockage local (localStorage) de votre navigateur pour
              sauvegarder vos recherches de villes et les résultats météo correspondants. Cela
              permet de retrouver rapidement vos recherches précédentes sans avoir à les redemander
              aux serveurs. Aucune donnée personnelle n'est collectée ou partagée.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
