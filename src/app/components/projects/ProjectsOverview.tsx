// ProjectsOverview.tsx
import React from 'react';
import ProjectCard from '@/app/components/projects/ProjectCard';

const projects = [  
    {
      id: 3,
      title: 'Digital Fashion',
      description: 'I am currently writing my bachelor thesis, exploring the topic of digital fashion, using AI as generative methods.',
      class: 'bachelor-thesis',
      imageUrl: '/hammer-trasp.gif',
    },
    {
      id: 4,
      title: 'Launch -> Garments Digital',
      description: 'After receiving a start-up grant within the framework of the Gründerstipendium NRW, we officially launched our welcome page, while working on the editor itself.',
      class: 'project',
      imageUrl: '/hammer-trasp.gif',
    },
    {
      id: 5,
      title: 'Garments Digital Development',
      description: 'This is part of my sixth semester at Code & Context. We are working on a digital Space, enabling the User to prototype their own garments, with the use of three.js. We are hoping to democratize the process of designing clothing, both in the digital and analog world.',
      class: 'development',
      imageUrl: '/hammer-trasp.gif',
    },
    {
      id: 6,
      title: 'COENV - Better Work Environment',
      description: 'COENV is part of Project Launch. This project emerged from the 5th semester of Code & Context initiated by Kathia von Roth. CoENV aims at creating a better work environment. CUBE, SIGILS, and ROOMBOARD are different modules of the COENV. Together they create the ecosystem. This is a DIY project, so feel free to take a look at our README. If you would like to take a look at our work-process, join our spaces channel.',
      class: 'IOT',
      imageUrl: '/hammer-trasp.gif',
    },
    {
      id: 7,
      title: 'Birds on Bikes',
      description: 'IOT & Tensorflow project, being part of the 4th semester. We developed a DIY Bird Cam, being able to detect Birds automatically with the use of tensorflow. Simultaneously we created a website, giving space to people building their very own bird cam. This can be seen as a community & social space.',
      class: 'IOT',
      imageUrl: '/hammer-trasp.gif',
    },
    {
      id: 9,
      title: 'B - Seite Photography',
      description: 'For the Schöngeist-Beitrag dieser Woche, Maximilian Schmalenbach und Frederik Stilke haben ihre persönlichen Fotoarchive durchstöbert, um analoge Fotografien mit Filmfehlern zu finden.',
      class: 'photography',
      imageUrl: '/hammer-trasp.gif',
    },
    {
      id: 11,
      title: 'Greetings from Bonn! Photography',
      description: 'Dass Bonn keine Weltstadt ist, braucht man wohl niemandem zu erzählen. Und dennoch hat es seine Ecken und Kanten, die eine fast schon romantische Sicht auf die ehemalige Hauptstadt der Bundesrepublik Deutschland zulässt. Diese festzuhalten ist unseren SCHÖNGEIST-Fotografen Maximilian Schmalenbach und Frederik Stilke gelungen.',
      class: 'photography',
      imageUrl: '/hammer-trasp.gif',
    },
  ];

const ProjectsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          projectClass={project.class}
          imageUrl={project.imageUrl}
          date="2021-06-01"
        />
      ))}
    </div>
  );
};

export default ProjectsOverview;
