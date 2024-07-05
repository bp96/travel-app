import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import DestinationGridCard from './DestinationGridCard';

const DestinationGrid = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <DestinationGridCard bg={BoraBora} text='Bora Bora' />
    <DestinationGridCard bg={BoraBora2} text='Maldives' />
    <DestinationGridCard bg={Maldives} text='Antigua' />
    <DestinationGridCard bg={Maldives2} text='Cozumel' />
    <DestinationGridCard bg={Maldives3} text='Jamaica' />
    <DestinationGridCard bg={KeyWest} text='Florida' />
    
        
    </div>
  )
}

export default DestinationGrid