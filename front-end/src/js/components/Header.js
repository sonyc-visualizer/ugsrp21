import React, { useEffect, useState, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '../../data/headerNavLinks'
import MobileNav from './MobileNav'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <header className="flex items-center justify-between py-6 z-10">
      <div>
        <Link
          href="/"
          aria-label="SONYC lab"
          className="mr-3 font-bold text-xl"
        >
          SONYC Lab
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`p-1  ${
                location.pathname === link.href
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 font-medium'
              }  sm:p-4 hover:text-gray-500 whitespace-nowrap`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="hidden items-center text-base leading-5 sm:flex"></div>

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
