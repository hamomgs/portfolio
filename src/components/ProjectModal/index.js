import React from 'react'
import * as S from './styles.js'
import { HiOutlineX } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

export default function ProjectModal({
  name,
  description,
  techStack,
  image,
  demo,
  repository,
  setModalIndex
}) {

  const handleOutsideClick = e => {
    if(e.target.id === 'modal') {
      setModalIndex(-1)
    } 
  }

  // const handleChageProject = () => {
  //   setModalIndex(index => {
  //     if(index >= 0 && index < 7) {
  //       return index + 1
  //     } else {
  //       return 0
  //     }
  //   })
  // }

  return (
    <S.ModalContainer id='modal' onClick={e => handleOutsideClick(e)}>
      <S.Container>
        <S.CloseBtn onClick={() => setModalIndex(-1)} >
          <HiOutlineX />
        </S.CloseBtn>
        <S.Title>{name}</S.Title>
        <S.P><span>⚙ Tech Stack:</span> {techStack}</S.P>
        <S.P><span>📄 Details:</span> {description}</S.P>
        <S.LinksContainer>
          <S.Link href={demo} target='_blank'>
            <CgWebsite />
            Demo
          </S.Link>
          <S.Link href={repository} target='_blank'>
            <BsGithub />
            Repo
          </S.Link>
        </S.LinksContainer>
        <S.ProjectImage src={image} alt={name} />
        {/* <button onClick={() => handleChageProject()}>
          test
        </button> */}
      </S.Container>
    </S.ModalContainer>
  )
}
