'use client';
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { SearchCommand } from './SearchCommand'
import { Search } from 'lucide-react';

const Header = () => {
    const pathname = usePathname()
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <header>
            <div className='main-conatainer inner flex items-center justify-between'>
                <Link href="/">
                    <Image src="/logo.svg" alt="CoinPulse logo" width={132} height={40} />
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href='/'
                        className={cn('nav-link', {
                            'is-active': pathname === '/',
                            'is-home': true,
                        })}
                    >
                        Home</Link>

                    <div id="search-modal" className="flex items-center h-full">
                        <button
                            onClick={() => setOpenSearch(true)}
                            className="trigger"
                        >
                            <Search className="size-5" />
                            <span className="hidden lg:inline-flex">Search coins...</span>
                            <span className="inline-flex lg:hidden">Search...</span>
                            {/* <kbd className="kbd">
                                <span className="text-xs">⌘</span>K
                            </kbd> */}
                        </button>
                        <SearchCommand open={openSearch} setOpen={setOpenSearch} />
                    </div>

                    <Link href='/coins'
                        className={cn('nav-link', {
                            'is-active': pathname === '/coins',
                            'is-home': true,
                        })}
                    >All Coins</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
