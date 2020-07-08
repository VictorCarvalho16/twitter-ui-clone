import React from 'react'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Nome do perfil</h1>
        <h2>@nomealeatorio</h2>

        <p>
          Descrição do perfil 
          <a href="https://www.twitter.com">@twitter</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Curitiba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em  de janeiro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>25</strong>
          </span>
          <span>
            <strong>150</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage
