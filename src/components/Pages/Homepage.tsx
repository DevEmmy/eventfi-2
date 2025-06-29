import React from 'react'
import Banner from '../Widgets/Banner'
import NavBar from '../Widgets/NavBar'
import PurposeSection from '../Widgets/PurposeSection'
import StatsSection from '../Widgets/StatsSection'
import TopEventsSection from '../Widgets/TopEventsSection'
import CategoriesSection from '../Widgets/CategoriesSection'
import UpcomingEventsSection from '../Widgets/UpcomingEventsSection'
import FreeEventsSection from '../Widgets/FreeEventsSection'
import FeaturedEventsSection from '../Widgets/FeaturedEventsSection'
import LocalEventsSection from '../Widgets/LocalEventsSection'
import Footer from '../Widgets/Footer'
import InteractiveGamesComingSoon from '../Widgets/InteractiveGamesComingSoon'
import CoreFeaturesSection from '../Widgets/CoreFeaturesSection'
import ForOrganizersAndAttendees from '../Widgets/ForOrganizersAndAttendees'
import TestimonialsSection from '../Widgets/TestimonialsSection'
import FAQSection from '../Widgets/FAQSection'

const Homepage = () => {
  return (
    <div className='text-white/90'>
        <NavBar />
        <Banner />
        <CategoriesSection />
        <TopEventsSection />
        <UpcomingEventsSection />
        <FreeEventsSection />
        <FeaturedEventsSection />
        <LocalEventsSection />
        <StatsSection />
        
        <CoreFeaturesSection />
        <ForOrganizersAndAttendees />
        {/* <TestimonialsSection /> */}
        <InteractiveGamesComingSoon />
        <FAQSection />
        <Footer />
    </div>
  )
}

export default Homepage