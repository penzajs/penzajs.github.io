import * as React from 'react'
import styled from 'styled-components'
import { Vk, Telegram, Facebook, Github } from 'styled-icons/fa-brands'
import Layout from '../components/layout'
import logo from '../content/penzajs.svg'

const Root = styled.div`
  background-color: #111;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1rem;
`

const VkIcon = Vk.extend`
  width: 2rem;
  height: 2rem;
`

const FbIcon = Facebook.extend`
  width: 2rem;
  height: 2rem;
`
const GithubIcon = Github.extend`
  width: 2rem;
  height: 2rem;
`

const TgIcon = Telegram.extend`
  width: 2rem;
  height: 2rem;
`

const Link = styled.a`
  color: white;
  cursor: pointer;
  & + & {
    margin-left: 1rem;
  }
`

const Logo = styled.img`
  align-self: center;
  max-width: 15rem;
`

export default () => (
  <Layout>
    <Root>
      <Content>
        <Logo src={logo} />
        <Icons>
          <Link href="https://vk.com/penzajs">
            <VkIcon />
          </Link>
          <Link href="https://tg.me/penzajs">
            <TgIcon />
          </Link>
          <Link href="https://github.com/penzajs">
            <GithubIcon />
          </Link>
          <Link href="https://www.facebook.com/groups/penzajs/">
            <FbIcon />
          </Link>
        </Icons>
      </Content>
    </Root>
  </Layout>
)
