import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ArchitectureTable from '../components/ArchitectureTable'
import InteriorPackages from '../components/InteriorPackages'
import OtherServices from '../components/OtherServices'
import InteriorStylist from '../components/Interiorstylist'
import FullHouseMoodboards from '../components/Fullhousemoodboards'

export default function Price() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      // slight delay so all sections are mounted/painted before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(location.state.section);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div>
        <ArchitectureTable />
        <InteriorPackages />
        <OtherServices />
        <InteriorStylist />
        <FullHouseMoodboards />
    </div>
  )
}