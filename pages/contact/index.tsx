/* eslint-disable react/jsx-no-undef */

import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function ContactPage() {

    const { asPath } = useRouter();

  return (
    
    <MainLayout>        
      <h1>Contact Page</h1>
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
    </MainLayout>
    
  )
}
