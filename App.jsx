import React, { useState, useEffect } from 'react';
import { Shield, Lock, Network, Search, Code, Users, Mail, Download, Github, Linkedin, Twitter, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import './App.css';

// Import des images
import cyberIcon1 from './assets/R7XQEBqxajJ2.png';
import cyberIcon2 from './assets/V8xnSooFsVqf.png';
import cyberIcon3 from './assets/4l8vEMblE7nB.png';
import cyberIcon4 from './assets/boP7fZH3E84f.png';
import cyberIcon5 from './assets/nSU42O2eGMoo.png';
import cyberBg1 from './assets/Oxv2N9EdUAqL.jpg';
import cyberBg2 from './assets/fv8qv84Hojym.jpg';
import cyberBg3 from './assets/N67KHHhcv35G.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'personal', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Sécurité Réseau', level: 95, icon: Network },
    { name: 'Tests d\'Intrusion', level: 90, icon: Search },
    { name: 'Forensique Numérique', level: 85, icon: Code },
    { name: 'Conformité RGPD', level: 88, icon: Shield },
    { name: 'Gestion des Risques', level: 92, icon: Lock },
    { name: 'Formation Équipes', level: 87, icon: Users }
  ];

  const experiences = [
    {
      title: 'Expert en Cybersécurité Senior',
      company: 'Entreprise Confidentielle',
      period: '2021 - Présent',
      description: 'Responsable de la stratégie de cybersécurité pour une infrastructure critique desservant plus de 100,000 utilisateurs.',
      achievements: [
        'Réduction de 85% des incidents de sécurité',
        'Mise en conformité RGPD complète en 6 mois',
        'Formation de 200+ collaborateurs',
        'Développement d\'outils d\'automatisation'
      ]
    },
    {
      title: 'Consultant en Sécurité des SI',
      company: 'Cabinet de Conseil',
      period: '2018 - 2021',
      description: 'Conseil et accompagnement d\'entreprises dans leur transformation numérique sécurisée.',
      achievements: [
        'Audit de sécurité pour une banque régionale',
        'Implémentation architecture zero-trust',
        'Réponse à incident majeur en 48h',
        'Certification ISO 27001 pour 3 organisations'
      ]
    },
    {
      title: 'Analyste Sécurité',
      company: 'Entreprise Technologique',
      period: '2015 - 2018',
      description: 'Analyse des menaces et vulnérabilités, développement de contre-mesures.',
      achievements: [
        'Développement système de détection IA',
        'Participation à 50+ tests d\'intrusion',
        'Création base de connaissances sécurité',
        'Mentoring de 5 analystes junior'
      ]
    }
  ];

  const projects = [
    {
      title: 'Plateforme de Threat Intelligence',
      description: 'Développement d\'une plateforme centralisée de collecte et d\'analyse de threat intelligence.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      impact: 'Amélioration de 70% du temps de détection des menaces avancées',
      image: cyberBg1
    },
    {
      title: 'Framework d\'Automatisation SOC',
      description: 'Création d\'un framework SOAR pour l\'automatisation des réponses aux incidents.',
      technologies: ['Python', 'Ansible', 'Docker', 'ELK Stack'],
      impact: 'Réduction de 80% du temps de traitement des alertes',
      image: cyberBg2
    },
    {
      title: 'Solution de Chiffrement Quantique-Résistant',
      description: 'Recherche et développement d\'une solution de chiffrement post-quantique.',
      technologies: ['C++', 'OpenSSL', 'Cryptographie Post-Quantique'],
      impact: 'Prototype fonctionnel avec performance équivalente',
      image: cyberBg3
    }
  ];

  const FloatingParticles = () => {
    return (
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">CyberSec Expert</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'experience', 'projects', 'personal', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'hero' ? 'Accueil' : 
                   section === 'about' ? 'À Propos' :
                   section === 'skills' ? 'Compétences' :
                   section === 'experience' ? 'Expérience' :
                   section === 'projects' ? 'Projets' :
                   section === 'personal' ? 'Personnel' :
                   'Contact'}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                {['hero', 'about', 'skills', 'experience', 'projects', 'personal', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left capitalize transition-colors hover:text-primary"
                  >
                    {section === 'hero' ? 'Accueil' : 
                     section === 'about' ? 'À Propos' :
                     section === 'skills' ? 'Compétences' :
                     section === 'experience' ? 'Expérience' :
                     section === 'projects' ? 'Projets' :
                     section === 'personal' ? 'Personnel' :
                     'Contact'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-gradient">
        <FloatingParticles />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <img src={cyberIcon1} alt="Cybersecurity Icon" className="w-24 h-24 mx-auto mb-6 cyber-glow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Expert en <span className="text-primary">Cybersécurité</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Spécialiste en sécurité des systèmes d'information et protection des données
          </p>
          <div className="typing-animation text-lg md:text-xl text-primary mb-12 max-w-4xl mx-auto">
            Passionné par la protection des infrastructures numériques
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cyber-glow hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              Me Contacter
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="cyber-border hover-lift"
              onClick={() => scrollToSection('about')}
            >
              En Savoir Plus
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">À Propos de Moi</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={cyberIcon2} alt="About" className="w-full max-w-md mx-auto cyber-glow rounded-lg" />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Professionnel expérimenté en cybersécurité avec une solide expertise dans la protection 
                  des systèmes d'information et la gestion des risques numériques. Mon parcours m'a permis 
                  de développer une approche holistique de la sécurité.
                </p>
                <p className="text-lg text-muted-foreground">
                  Ma passion pour la cybersécurité est née de la conviction que la sécurité numérique 
                  est un enjeu fondamental de notre époque. Dans un monde de plus en plus connecté, 
                  protéger les données et les infrastructures critiques n'est pas seulement une 
                  nécessité technique, mais un impératif éthique.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CISSP</Badge>
                  <Badge variant="secondary">CEH</Badge>
                  <Badge variant="secondary">OSCP</Badge>
                  <Badge variant="secondary">CISM</Badge>
                  <Badge variant="secondary">AWS Security</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Compétences Techniques</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="hover-lift cyber-border">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary mr-3" />
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                      </div>
                      <div className="skill-bar mb-2">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {skill.level}%
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Expérience Professionnelle</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover-lift cyber-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Réalisations clés :</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projets Portfolio</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover-lift cyber-border overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <div className="text-sm text-primary font-semibold">
                      Impact: {project.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section id="personal" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Aspect Humain</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="hover-lift cyber-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 text-primary mr-2" />
                    Passions & Centres d'Intérêt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologie et Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Passionné par les nouvelles technologies, je participe régulièrement à des 
                      conférences techniques et contribue à des projets open source.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Transmission de Connaissances</h4>
                    <p className="text-muted-foreground text-sm">
                      J'interviens régulièrement dans des écoles d'ingénieurs et anime des 
                      ateliers de sensibilisation à la cybersécurité.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sport et Bien-être</h4>
                    <p className="text-muted-foreground text-sm">
                      Pratiquant régulier de course à pied et de natation, je crois fermement 
                      que l'équilibre physique et mental est essentiel.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift cyber-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-2" />
                    Valeurs Professionnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Intégrité</h4>
                    <p className="text-muted-foreground text-sm">
                      La cybersécurité repose sur la confiance. Je m'engage à maintenir les 
                      plus hauts standards d'éthique et de transparence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Excellence Technique</h4>
                    <p className="text-muted-foreground text-sm">
                      La recherche constante de l'excellence technique est ma motivation 
                      quotidienne pour rester à la pointe des menaces.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Face à des menaces en constante évolution, l'innovation est indispensable 
                      pour anticiper et contrer les cyberattaques.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="hover-lift cyber-border">
                <CardHeader>
                  <CardTitle>Informations de Contact</CardTitle>
                  <CardDescription>
                    Actuellement ouvert aux opportunités de collaboration et aux missions de conseil.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>contact@cybersec-expert.fr</span>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="cyber-border">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="cyber-border">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="cyber-border">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift cyber-border">
                <CardHeader>
                  <CardTitle>Téléchargements</CardTitle>
                  <CardDescription>
                    Accédez à mes documents professionnels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full cyber-glow">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger CV Complet (PDF)
                  </Button>
                  <Button variant="outline" className="w-full cyber-border">
                    <Download className="w-4 h-4 mr-2" />
                    Portfolio Détaillé (PDF)
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Références clients disponibles sur demande
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Expert Cybersécurité. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

