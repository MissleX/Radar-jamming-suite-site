import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Demos from "@/components/demos"
import Documentation from "@/components/documentation"
import Legal from "@/components/legal"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Demos />
        <Documentation />
        <Legal />
        <About />
      </main>
      <Footer />
    </div>
  )
}
