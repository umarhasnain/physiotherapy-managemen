'use client'
import DashboardLayoutBranding from '@/components/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
       <DashboardLayoutBranding/>
       {children}
    </div>
  )
}

export default layout
