import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

// Logo image placeholder - will be replaced with actual asset
const logoImg = "/api/placeholder/47/20"; // Placeholder for the WAVESPEED logo

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(2,6,23,0.5)] backdrop-blur-sm border-b border-slate-200/10">
      <div className="mx-auto px-8 py-3">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[1200px] h-10">
            <div className="flex items-center justify-between h-full">
              {/* Logo */}
              <div className="flex items-center gap-[5px] h-5">
                <div 
                  className="w-[47px] h-5 bg-center bg-cover bg-no-repeat shrink-0"
                  style={{ backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750834580646898394_08Cyvtpm.png')` }}
                />
                <div className="flex items-center gap-0.5">
                  <span className="text-white text-[20px] leading-[20px] font-big-john">
                    WAV
                  </span>
                  <span className="text-white text-[20px] leading-[20px] font-big-john adjustLetterSpacing">
                    ESPEED
                  </span>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center gap-10">
                <nav className="flex items-center gap-10">
                  <Link 
                    href="/" 
                    className="text-white text-[14px] font-medium leading-[20px] hover:text-gray-200 transition-colors"
                  >
                    Homepage
                  </Link>
                  <Link 
                    href="https://wavespeed.ai" 
                    className="text-white text-[14px] font-medium leading-[20px] hover:text-gray-200 transition-colors"
                  >
                    Model playground
                  </Link>
                  <Link 
                    href="https://wavespeed.ai/models" 
                    className="text-white text-[14px] font-medium leading-[20px] hover:text-gray-200 transition-colors"
                  >
                    Documentation
                  </Link>
                </nav>
                
                {/* CTA Button */}
                <Link 
                  href="https://wavespeed.ai/collections/bytedance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    className="bg-white text-slate-900 border-slate-200 hover:bg-gray-50"
                  >
                    Start Using Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 