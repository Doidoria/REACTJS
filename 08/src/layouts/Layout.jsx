import Header from './Header'
import Aside from './Aside'
import Section from './Section'
import Footer from './Footer'
import './css/Layout.css'

const Layout = ({children,IsShowAside=true})=>{

    return (
        <div className='wrapper'>
            <Header/>
            <main>
                {IsShowAside && <Aside />}
                <Section>
                    {children}
                </Section>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout