import React from 'react'

export interface LinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

export const Link = ({ to, children, className }: LinkProps) => {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}
