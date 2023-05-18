import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function AboutPage() {

  const { asPath } = useRouter();

  return (
    <>      
      <h1>About Page</h1>
        <div className="description">          
          <h1 className="title">            
            Ir a <Link href="/about">About</Link>
          </h1>
          <h1 className="title">            
            Ir a <Link href="/contact">Contact</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className="code">pages{asPath}.js</code>
          </p>          
        </div> 
    </>    
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
