import React from 'react';
import icon1 from '@/assests/icons/home.png' ;
import icon2 from '@/assests/icons/tabs.png' ;
import icon3 from '@/assests/icons/user.png' ;
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=' px-10 py-4 bg-blue-950 flex justify-between items-center z-40 fixed bottom-0 w-full'>

        <div>
            <Image src={icon1} alt='tab icon' title='home icon' className='w-8'/>
        </div>
        <div>
            <Image src={icon2} alt='tab icon' title='create post' className='w-8'/>
        </div>
        <div>
            <Image src={icon3} alt='tab icon' title='profile' className='w-8'/>
        </div>
        </footer>
    );
};

export default Footer;