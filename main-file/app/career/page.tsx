import CmnBanner from '@/components/layout/banner/CmnBanner'
import CustomCursor from '@/components/layout/CustomCursor'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import TopHeader from '@/components/layout/header/TopHeader'
import ScrollProgressButton from '@/components/layout/ScrollProgressButton'
import React from 'react'

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="Career" />
      
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  )
}

export default page