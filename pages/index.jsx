import Page from '../components/Page'
import PoliticaComponents from '../components/PoliticaComponets'
import Nav from '../components/Nav'
import Header from '../components/Header'
import QuemSomos from '../components/QuemSomos'
import MVV from '../components/MVV'
import Footer from '../components/Footer'
import Contato from '../components/Contato'

export default function Home() {

  return (
    <Page title="AGÁ Empreendimentos" description="Site AGÁ Empreendimentos" path="/">
      <PoliticaComponents />
      <Nav />
      <Header />
      <QuemSomos />
      <MVV />
      <Contato />
      <Footer />
    </Page>
  )
}