import React from 'react';
import Button from '../ui/Button';

// Logo images - using actual CDN URLs from the user's modifications
const imgSeedanceLogo = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750777816531907910_9bCzvsom.png";
const imgHailuoLogo = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750777694582259577_Eec7miea.png";
const imgGoogleLogo = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750777687604833653_WWSPMJFC.png";
const imgKlingLogo = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750777795737281848_4b9mifb7.png4"; 
const imgMidjourney = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750777802359429728_walhe9yu.png"; 

interface TableRowProps {
  logo: string;
  logoAlt: string;
  modelName: string;
  resolution: string;
  price: string;
  generationTime: string;
  actionButton?: React.ReactNode;
  isHighlighted?: boolean;
}

function TableRow({ logo, logoAlt, modelName, resolution, price, generationTime, actionButton, isHighlighted = false }: TableRowProps) {
  return (
    <div className={`flex flex-row items-center relative w-full ${isHighlighted ? 'bg-white rounded-lg' : ''}`}>
      <div className="flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
        {/* Model Name with Logo */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-row gap-2 items-center justify-start">
            <div
              className="bg-center bg-cover bg-no-repeat shrink-0 w-6 h-6"
              style={{ backgroundImage: `url('${logo}')` }}
            />
            <div className={`flex-1 font-bold text-[16px] text-left ${isHighlighted ? 'text-[rgba(0,0,0,0.8)]' : 'text-[rgba(255,255,255,0.8)]'}`}>
              <p className="leading-[24px]">{modelName}</p>
            </div>
          </div>
        </div>
        
        {/* Resolution */}
        <div className={`flex-1 font-bold text-[16px] text-right ${isHighlighted ? 'text-[rgba(0,0,0,0.8)]' : 'text-[rgba(255,255,255,0.8)]'}`}>
          <p className="leading-[24px]">{resolution}</p>
        </div>
        
        {/* Price */}
        <div className={`flex-1 font-bold text-[16px] text-right ${isHighlighted ? 'text-[rgba(0,0,0,0.8)]' : 'text-[rgba(255,255,255,0.8)]'}`}>
          <p className="leading-[24px]">{price}</p>
        </div>
        
        {/* Generation Time */}
        <div className={`flex-1 font-bold text-[16px] text-right ${isHighlighted ? 'text-[rgba(0,0,0,0.8)]' : 'text-[rgba(255,255,255,0.8)]'}`}>
          <p className="leading-[24px]">{generationTime}</p>
        </div>
        
        {/* Action */}
        <div className="flex-1 flex justify-end">
          {actionButton}
        </div>
      </div>
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-[#050303] relative w-full">
      <div className="flex flex-col items-center relative w-full">
        <div className="flex flex-col gap-2.5 items-center justify-start px-32 py-10 relative w-full">
          <div className="max-w-[1040px] relative w-full">
            <div className="flex flex-col gap-6 items-center justify-start relative w-full">
              
              {/* Title */}
              <div className="font-medium text-white text-[30px] text-center w-full">
                <p className="leading-[36px]">Full Comparison table</p>
              </div>
              
              {/* Table Container */}
              <div className="bg-[rgba(0,0,0,0.4)] relative rounded-xl w-full border-2 border-neutral-500">
                <div className="flex flex-col items-center relative w-full">
                  <div className="flex flex-col gap-6 items-center justify-start p-6 relative w-full">
                    
                    {/* Table Header */}
                    <div className="bg-black h-8 relative w-full rounded">
                      <div className="flex flex-row font-medium gap-2 h-8 items-start justify-start px-2 py-1 relative text-[16px] text-[rgba(255,255,255,0.8)] w-full">
                        <div className="flex-1 text-left">
                          <p className="leading-[24px]">Model</p>
                        </div>
                        <div className="flex-1 text-right">
                          <p className="leading-[24px]">Resolution</p>
                        </div>
                        <div className="flex-1 text-right">
                          <p className="leading-[24px]">Price (Per video)</p>
                        </div>
                        <div className="flex-1 text-right">
                          <p className="leading-[24px]">Generation time (sec)</p>
                        </div>
                        <div className="flex-1 text-right">
                          <p className="leading-[24px]">Action</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Table Rows */}
                    <div className="flex flex-col gap-0 w-full">
                      {/* Seedance Row (Highlighted) */}
                      <TableRow
                        logo={imgSeedanceLogo}
                        logoAlt="Seedance Logo"
                        modelName="Seedance"
                        resolution="480p, 720p"
                        price="$0.08"
                        generationTime="20"
                        isHighlighted={true}
                        actionButton={
                          <a 
                            href="https://www.wavespeed.ai/collections/bytedance"
                            className="bg-[#007bff] text-white font-bold text-[16px] px-8 py-2 rounded-lg text-center no-underline hover:bg-[#0056b3] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Try
                          </a>
                        }
                      />
                      
                      {/* MiniMax Hailuo Row */}
                      <TableRow
                        logo={imgHailuoLogo}
                        logoAlt="Hailuo Logo"
                        modelName="MiniMax Hailuo"
                        resolution="720p"
                        price="$0.35"
                        generationTime="300"
                        actionButton={
                          <a
                           href="https://wavespeed.ai/collections/minimax"
                           className="border border-white text-white font-bold text-[16px] px-8 py-2 rounded-xl bg-transparent hover:bg-white hover:text-black transition-colors"
                           
                          >
                            Try
                          </a>
                        }
                      />
                      
                      {/* Google Veo3 Row */}
                      <TableRow
                        logo={imgGoogleLogo}
                        logoAlt="Google Logo"
                        modelName="Google Veo3"
                        resolution="1080p"
                        price="$8.00"
                        generationTime="90"
                        actionButton={
                          <a
                           href="https://wavespeed.ai/models/google/veo3"
                           className="border border-white text-white font-bold text-[16px] px-8 py-2 rounded-xl bg-transparent hover:bg-white hover:text-black transition-colors"
                           
                          >
                            Try
                          </a>
                        }
                      />
                      
                      {/* Kling 2.1 Pro Row */}
                      <TableRow
                        logo={imgKlingLogo}
                        logoAlt="Kling Logo"
                        modelName="Kling 2.1 Pro"
                        resolution="1080p"
                        price="$0.45"
                        generationTime="170"
                        actionButton={
                          <a
                           href="https://wavespeed.ai/collections/kling"
                           className="border border-white text-white font-bold text-[16px] px-8 py-2 rounded-xl bg-transparent hover:bg-white hover:text-black transition-colors"
                           
                          >
                            Try
                          </a>
                        }
                      />
                      
                      {/* Midjourney Row */}
                      <TableRow
                        logo={imgMidjourney}
                        logoAlt="Midjourney Logo"
                        modelName="Midjourney"
                        resolution="480p"
                        price="Starting from $8"
                        generationTime="-"
                        actionButton={null}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 