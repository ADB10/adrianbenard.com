import profilPic from './assets/profil.png'
import { ButtonLink } from './components/Button'
import './App.css'
import { ExperienceCard } from './components/Cards'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import ExternalLinks from './components/ExternalLinks'
import Navbar from './components/Navbar'
import { SectionTitle } from './components/Utils'

function App() {

  return (
    <>
      <Navbar />
      <section id="hero" className='p-2 pt-32 container lg:mx-auto'>
        <h1 className='title text-3xl lg:text-center mb-4 lg:text-5xl lg:leading-normal'>
          Transformez <span className="text-highlight">votre vision</span> en une solution digitale à <span className="text-highlight">haut impact</span>
        </h1>
        <p className='lg:text-center mb-8 lg:max-w-3xl lg:mx-auto'>
          Avec plus de 5 ans d'expérience en IA et développement logiciel, je transforme des idées innovantes en produits numériques. Que ce soit pour développer des modèles de machine learning, créer des applications sur mesure ou des solutions web évolutives, je propose des services de haute qualité pour concrétiser votre projet.
        </p>
        <div className="cta flex flex-col items-center">
          <ButtonLink type="primary">
            Réserver un appel gratuit
          </ButtonLink>
          <ButtonLink type="secondary">
            Découvrir mes projets
          </ButtonLink>
        </div>
      </section>

      <section id="about" className='m-2 mt-32 bg-white rounded shadow relative container w-fit lg:mx-auto'>
        <div className="img-bg flex justify-center items-center rounded-t lg:justify-start lg:px-24">
          <h2 className='background-color text-xl lg:text-3xl'>
            En savoir plus sur mon parcours
          </h2>
        </div>

        <div className="profil-pic rounded-full border-4 ml-2 lg:ml-24">
          <img className='rounded-full' src={profilPic} alt="Adrian Benard" />
        </div>

        <div className="content p-2 text-sm lg:px-24">
          <p className='mb-4 mt-16 font-weight-200 lg:mt-24 lg:w-[90%]'>
            Je suis Adrian Benard, ingénieur en IA et développeur Python basé à Toulouse. Ma passion pour la programmation m'a conduit à me spécialiser en intelligence artificielle. Fort d'une expérience en IA et développement logiciel, j'ai travaillé sur des projets variés, des modèles avancés de machine learning aux solutions logicielles sur mesure. Mon parcours m'a façonné en résolveur de problèmes, capable d'aborder des défis complexes avec des approches innovantes.
          </p>
          <ButtonLink type="primary">
            Me contacter
          </ButtonLink>
          <ButtonLink type="secondary">
            Voir mon cv
          </ButtonLink>
          <div className="grid grid-cols-2 gap-4 my-8">
            <ExperienceCard stat="2" what='ans' subject="Ingénieur Intelligence Artificielle" />
            <ExperienceCard stat="5" what='ans' subject="Développeur Front-End" />
            <ExperienceCard stat="2" what='ans' subject="Développeur Back-End" />
            <ExperienceCard stat="5" what='ans' subject="Développeur Python Software" />
            <ExperienceCard stat="50" what='élèves' subject="Cours particuliers" />
          </div>
        </div>
      </section>

      <section id="projects" className='p-2 mt-32 mb-16 container lg:mx-auto'>
        <SectionTitle
          title={<>Un aperçu de <span className="text-highlight">mes projets</span></>}
          subtitle="Explorez mon portfolio et découvrez les projets innovants où la créativité rencontre l'expertise technique."
        />
        <div className="container mt-8">
          <Portfolio />
        </div>
      </section>

      <section id="services" className='bg-main-shade-100 py-16'>
        <div className="container p-2 lg:mx-auto">
          <SectionTitle
            title={<><span className="text-highlight">Les services</span> que je propose</>}
            subtitle="Offrant une gamme de services, du développement d'IA et de solutions logicielles au tutorat personnalisé en programmation. Travaillons ensemble pour donner vie à votre projet ou pour améliorer vos compétences dans le monde de la technologie."
            center={true}
          />
        </div>
      </section>

      <section id='reviews' className='mt-16 mb-16 p-2 container lg:mx-auto'>
        <SectionTitle
          title={<><span className="text-highlight">Les avis</span> de mes clients et élèves</>}
          subtitle="Offrant une gamme de services, du développement d'IA et de solutions logicielles au tutorat personnalisé en programmation. Travaillons ensemble pour donner vie à votre projet ou pour améliorer vos compétences dans le monde de la technologie."
        />
        <div className="container mt-8">
          <Reviews />
        </div>
      </section>

      <footer id="contact" className='p-2 pt-16 bg-main-black'>
        <div className="lg:w-fit lg:mx-auto">
          <SectionTitle
            title={<>Les liens pour <span className="text-highlight">me contacter</span></>}
            color='dark'
          />
          <div className="container mt-8 pb-16">
            <ExternalLinks />
          </div>
          <div className="credits text-center">
            <span className="text-main-white text-sm">
              © 2024 <a href="https://adrianbenard.com">adrianbenard.com</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
