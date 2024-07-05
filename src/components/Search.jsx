import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY OPTIONS FOR EVERYONE</h2>
          <p className='py-4'>
            Unde cognominum qui quos imbibere te verbis Opprimere sit-suspiriis
            perpftuam vel feroces ut MORDENS Gordius. Eum profes rerum hominem,
            vel mirum vel enim pygmaeus dimidium habitant nam maiestate quaedam
            ut Nulla Morbi, Explere, Lapidem, Sed Arendom, Annuere, Crescere mus
            Adversa, saevuli tincidunt generis oculis, maxime unde explere
            vincere directe per proin, nam porro duis eos uidem atque, iniuratum
            consiliarorum magna ante mi hac sint servire quo consiliis saepe
            libero et orci rotundo. Te sed sed corrupti w facunde, ARENDOM id
            dui poenis id Discursus satisfactus notandum eos successum reprobum.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50}/>
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='px-1 py-1'>SED-CRABRONES SUPERUE SED 70 EARUM AB-S-SEM</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>EASY BOOKINGS</h3>
                <p className='px-1 py-1'>EUM-OPPSOR MURRNUR SEM 00 AUGUE AC-Y-MUS</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Maldives</option>
                      <option>Cozumel</option>
                      <option>Bora Bora</option>
                      <option>Fiji</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
