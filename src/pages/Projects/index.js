import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles.js'
import ProjectModal from '../../components/ProjectModal/index.js'
import OdsEn from '../../assets/projects/ods-en.png'
import OdsPtBR from '../../assets/projects/ods-ptBR.png'
import PetCenter from '../../assets/projects/pet-center.png'
import InfoFlix from '../../assets/projects/infoflix.png'
import TodoApp from '../../assets/projects/todo-app.png'
import LeagueOfLegends from '../../assets/projects/league-of-legends.png'
import StarWars from '../../assets/projects/star-wars.png'
import Portflow from '../../assets/projects/portflow.png'
import Beat from '../../assets/projects/beat.png'
import i18n from '../../i18n/index.js'

export default function Projects({ isDark }) {
  const { t } = useTranslation()
  const [modalIndex, setModalIndex] = useState(-1)
  const locale = i18n.language

  const projectsInfo = [
    {
      name: 'ODS - ONU',
      image: locale === 'en' ? OdsEn : OdsPtBR,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio',
      techStack: 'ReactJS, Styled-Components',
      repository: 'https://github.com/hamomgs/ods-onu',
      demo: ''
    },
    {
      name: 'Pet Center',
      image: PetCenter,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio?',
      techStack: 'ReactJS, Styled-Components, REST API, React Router DOM',
      repository: 'https://github.com/hamomgs/pet-center',
      demo: 'https://pet-center-hamomgs.vercel.app'
    },
    {
      name: 'InfoFlix',
      image: InfoFlix,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio?',
      techStack: 'ReactJS, Styled-Components, REST API, React Router DOM',
      repository: 'https://github.com/hamomgs/infoflix',
      demo: 'https://infoflix-hamomgs.vercel.app'
    },
    {
      name: 'ToDo App',
      image: TodoApp,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio?',
      techStack: 'ReactJS, Styled-Components',
      repository: 'https://github.com/hamomgs/todo-app',
      demo: 'https://todo-app-hamomgs.vercel.app'
    },
    {
      name: 'League of Legends - Login Page',
      image: LeagueOfLegends,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio?',
      techStack: 'HTML5, CSS3, JavaScript',
      repository: 'https://github.com/hamomgs/league-of-legends',
      demo: 'https://hamomgs.github.io/league-of-legends'
    },
    {
      name: 'Star Wars - Landing Page',
      image: StarWars,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio?',
      techStack: 'HTML5, CSS3',
      repository: 'https://github.com/hamomgs/star-wars-landing-page',
      demo: 'https://hamomgs.github.io/star-wars-landing-page'
    },
    {
      name: 'Portflow',
      image: Portflow,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio?',
      techStack: 'HTML5, CSS3, JavaScript',
      repository: 'https://github.com/hamomgs/portflow',
      demo: 'https://hamomgs.github.io/portflow'
    },
    {
      name: 'Beat',
      image: Beat,
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas totam maiores dignissimos minima nihil commodi sapiente accusantium blanditiis distinctio?',
      techStack: 'HTML5, CSS3',
      repository: 'https://github.com/hamomgs/Beat',
      demo: 'https://hamomgs.github.io/Beat/'
    }
  ]

  useEffect(() => {
    document.querySelectorAll('nav>ul>li')
    .forEach(item => {
      if (item.classList.contains('projects')) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })

    if(modalIndex >= 0) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modalIndex])

  return (
    <S.ProjectsSection>
      <h2>{t('projects')}</h2>
      <S.Container isDark={isDark}>
        {projectsInfo.map((item, index) => (
          <S.ProjectContainer key={index}>
            {index === modalIndex && 
              <ProjectModal 
                name={item.name}
                image={item.image}
                description={item.description}
                techStack={item.techStack}
                repository={item.repository}
                demo={item.demo}
                setModalIndex={setModalIndex}
              />
            }
            <S.ImageContainer onClick={() => setModalIndex(index)}>
              <S.ProjectImg src={item.image} alt={item.name} />
            </S.ImageContainer>
            <S.ProjectTitle onClick={() => setModalIndex(index)}>{item.name}</S.ProjectTitle>
          </S.ProjectContainer>
        ))}
      </S.Container>
    </S.ProjectsSection>
  )
}