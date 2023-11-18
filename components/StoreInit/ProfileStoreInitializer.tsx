'use client'

import { useProfileStore } from "@/store/profile"
import { IProfile } from "@/types/profile"
import { useRef } from "react"

const StoreInitializer = ({ profile } : any) => {
  const initialized = useRef(false)
  if(!initialized.current) {
    useProfileStore.setState({profile: profile})
    initialized.current = true
  }
  return null
}

export default StoreInitializer