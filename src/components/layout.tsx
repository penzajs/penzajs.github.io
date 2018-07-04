import * as React from 'react'
import Helmet from 'react-helmet'

import '../styles/normalize'

import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface WrapperProps {
  children: React.ReactNode
}

const IndexLayout: React.SFC<WrapperProps> = ({ children }) => (
  <LayoutRoot>
    <Helmet
      title="PenzaJS"
      meta={[{ name: 'description', content: 'PenzaJS' }, { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }]}
    />
    <LayoutMain>{children}</LayoutMain>
  </LayoutRoot>
)

export default IndexLayout
