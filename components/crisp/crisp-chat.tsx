'use client'

import { useEffect } from 'react'

import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('b00d81ab-6075-43be-a085-dec60c88aefd')
  }, [])

  return null
}
