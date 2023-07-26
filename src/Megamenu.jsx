import React from 'react'
import { BiChevronRight  } from 'react-icons/bi';
const Megamenu = () => {
    return (
        <div>
            <div className="megamenu">
                <div className="megamenuitems">
                    <div className="mega-items ml-28">
                        <h3>Services</h3>
                        <ul>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/2danimation" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>2D Animation</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/3danimation" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>3D Animation</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/framebyframe" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Frame By Frame Animation</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/branddesign" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Brand Design </a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/gamedevelopment" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Game Development</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/illustrationandconceptart" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Concept Art & Illustration  </a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/nftdesign" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>NFT Design</a></li>
                        </ul>
                    </div>
                    <div className="mega-items">
                        <h3 >Services</h3>
                        <ul>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/corporatevideo" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Corporate Video</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/commercialvideo" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Commercial Video</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/educationalvideo" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Educational Video</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/animatedvideo" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Animated Music Video</a></li>
                          
                        </ul>
                    </div>
                 
                    <div className="mega-items">
                        <h3>Other Services</h3>
                        <ul>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/appdev" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>App Development</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/webdev" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Web Development</a></li>
                            <li><a className='flex gap-1 text-white hover:text-orange-500 duration-500' href="/digitalmarketing" target='_main'><BiChevronRight className='mt-1 text-orange-400'/>Digital Marketing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Megamenu