/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

import dynamic from 'next/dynamic'


const DynamicTestComponent = dynamic(() => import('../src/components/test'), { ssr: false })

const Home = () => {
  return  <div sx={{ height: `calc(100vh - 60px)`}}>
  <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
    <h1 sx={{fontSize: 8, my: 0}}>This is a really dope note taking app.</h1>
    <DynamicTestComponent/>
  </div>
</div> 
}

export default Home


export function getStaticProps ({params})  {
  return {
    props: {}
  }
}

