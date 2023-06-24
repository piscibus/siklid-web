import React from 'react';
import Brand from '@/components/navbar/brand';
import MobileButtons from '@/components/navbar/mobile-buttons';

function Navbar() {
  return (
      <nav>
        <div className="container mx-auto">
          <div className="flex flex-row justify-between">
            <Brand/>
            <MobileButtons/>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
