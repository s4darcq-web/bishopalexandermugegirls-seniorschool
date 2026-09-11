"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"
import Admissions from "./pages/Admissions"
import StudentLife from "./pages/StudentLife"
import Facilities from "./pages/Facilities"
import NewsEvents from "./pages/NewsEvents"
import Contact from "./pages/Contact"
import type { Page, NavigateFn } from "./types"

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")
  const [targetSection, setTargetSection] = useState<string | undefined>()

  const navigate: NavigateFn = (page, section) => {
    setCurrentPage(page)
    setTargetSection(section)
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }

  useEffect(() => {
    if (!targetSection) return

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth", block: "start" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [currentPage, targetSection])

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home navigate={navigate} />
      case "about": return <About navigate={navigate} />
      case "academics": return <Academics navigate={navigate} />
      case "admissions": return <Admissions navigate={navigate} />
      case "student-life": return <StudentLife navigate={navigate} />
      case "facilities": return <Facilities navigate={navigate} />
      case "news-events": return <NewsEvents navigate={navigate} />
      case "contact": return <Contact navigate={navigate} />
    }
  }

  return (
    <div className="min-h-full font-sans bg-background text-foreground">
      <Header currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  )
}
