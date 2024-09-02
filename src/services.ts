
export interface Service {
    name: string,
    description: string,
    price: number,
    pricePer: string,
    features: string[],
  }

// Services Freelance Développement
export const freelanceServices: Service[] = [
    {
        name: "Développement Web",
        description: "Création de sites web sur mesure, performants et réactifs, en utilisant les technologies les plus récentes pour garantir une expérience utilisateur optimale et une présence en ligne efficace.",
        price: 200,
        pricePer: "jour",
        features: [
            "Conception et développement de sites vitrines et e-commerce",
            "Intégration de designs responsives et adaptatifs",
            "Optimisation SEO pour un meilleur référencement",
            "Mise en place de systèmes de gestion de contenu (CMS) personnalisés",
            "Développement d'applications web interactives avec React et Node.js",
            "Maintenance et support technique continus",
        ],
    },
    {
        name: "Développement IA",
        description: "Conception et implémentation de solutions d'intelligence artificielle avancées pour automatiser les processus, améliorer la prise de décision et créer des expériences utilisateur innovantes.",
        price: 250,
        pricePer: "jour",
        features: [
            "Développement de modèles de machine learning et deep learning",
            "Analyse prédictive et traitement de données massives",
            "Traitement d'image et vision par ordinateur",
            "Traitement du langage naturel (NLP)",
            "Déploiement de solutions IA sur le cloud (AWS)",
            "Intégration de systèmes d'IA dans les applications existantes",
        ],
    },
];

// Services de Cours Particuliers
export const tutoringServices: Service[] = [
    {
        name: "Programmation Web Avancée",
        description: "Approfondissez vos compétences en développement web en explorant des technologies avancées et des meilleures pratiques pour créer des applications web modernes et performantes.",
        price: 25,
        pricePer: "heure",
        features: [
            "Maîtrise des frameworks front-end (React, Angular, Vue)",
            "Développement back-end avec Node.js et Express",
            "Gestion des bases de données (MongoDB, MySQL)",
            "Déploiement et maintenance d'applications web",
            "Optimisation des performances et sécurité web",
            "Introduction aux architectures microservices",
        ],
    },
    {
        name: "Intelligence Artificielle",
        description: "Découvrez les principes fondamentaux de l'intelligence artificielle et apprenez à développer vos propres modèles et applications basés sur l'IA.",
        price: 30,
        pricePer: "heure",
        features: [
            "Introduction au machine learning et deep learning",
            "Manipulation et prétraitement des données",
            "Construction de réseaux de neurones avec PyTorch",
            "Techniques de traitement d'image et de vision par ordinateur",
            "Compréhension et génération de langage naturel (NLP)",
            "Déploiement de modèles IA sur des plateformes cloud",
        ],
    },
    {
        name: "Découverte de la Programmation",
        description: "Initiez-vous à la programmation et acquérez les bases nécessaires pour créer vos premières applications et comprendre les concepts fondamentaux de l'informatique.",
        price: 20,
        pricePer: "heure",
        features: [
            "Introduction aux langages de programmation (Python, JavaScript)",
            "Compréhension des structures de données et algorithmes de base",
            "Principes de la programmation orientée objet",
            "Développement de projets simples et ludiques",
            "Initiation au développement web (HTML, CSS)",
            "Bonnes pratiques et méthodologies de développement",
        ],
    },
];
