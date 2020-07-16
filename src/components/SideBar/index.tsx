import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Perfil 2" nickname="@perfil2" />,
              <FollowSuggestion name="Perfil 3" nickname="@perfil_" />,
              <FollowSuggestion name="Perfil 4" nickname="@perfill"/>,]}/>

          <List title="O que está acontecendo" elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List title="O que está acontecendo" elements={[
              <News />,
              <News />,
              <News />,               
            ]}
          />
          <List
            title="O que está acontecendo" elements={[
              <News />,
              <News />,
              <News />,               
            ]}
          />
          
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
