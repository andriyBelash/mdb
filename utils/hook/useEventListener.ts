import React from 'react'
import { useEffect } from 'react';


const useEventListener = (target: HTMLElement | Window | Document, event: string, callback: (...arg: any) => void) => {
  useEffect(() => {
    target.addEventListener(event, callback)
    return () => {
      target.removeEventListener(event, callback)
    }
  })
}

export default useEventListener