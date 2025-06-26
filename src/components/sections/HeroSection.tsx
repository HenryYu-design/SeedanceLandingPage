import React from 'react';
import Button from '../ui/Button';

// Placeholder images - these will be replaced with actual logo assets
const imgGoogleLogo = "/api/placeholder/53/53";
const imgSeedanceLogo = "/api/placeholder/80/80"; 
const imgHailuoLogo = "/api/placeholder/53/53";

// Decorative background elements
const imgSecond = "/api/placeholder/80/80";
const imgFirst = "/api/placeholder/96/96";
const imgThird = "/api/placeholder/80/80";

export default function HeroSection() {
  return (
    <section className="bg-[#050303] relative w-full">
      <div className="flex flex-col items-center relative w-full">
        <div className="flex flex-col gap-2.5 items-center justify-start pb-6 pt-20 px-32 relative w-full">
          <div className="max-w-[1040px] relative w-full">
            <div className="flex flex-col items-center justify-center relative w-full">
              <div className="flex flex-col gap-16 items-center justify-center pb-0 pt-10 px-0 relative w-full">
                
                {/* Header Text */}
                <div className="relative w-full">
                  <div className="flex flex-col gap-10 items-center justify-start p-0 relative w-full">
                    <div className="relative w-full">
                      <div className="flex flex-col gap-4 items-start justify-start p-0 relative w-full">
                        <div className="relative w-full">
                          <div className="flex flex-col font-bold gap-4 items-start justify-start p-0 relative text-[48px] text-center w-full">
                            <div className="bg-gradient-to-b from-white to-[#626262] bg-clip-text text-transparent relative w-full">
                              <p className="leading-[48px]">Seedance is EXCLUSIVELY on</p>
                            </div>
                            <div className="bg-gradient-to-b from-white to-[#626262] bg-clip-text text-transparent h-12 relative w-full">
                              <p className="leading-[48px]">WaveSpeed.ai now!</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-b from-white to-[#626262] bg-clip-text text-transparent flex flex-col font-normal justify-center relative text-[24px] text-center w-full">
                          <p className="leading-[24px]">
                            <span>Starting From </span>
                            <span className="font-extrabold text-white">$0.08</span>
                            <span> per video</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benchmark Comparison Cards */}
                <div className="relative w-full">
                  <div className="flex flex-col gap-6 items-start justify-center p-0 relative w-full">
                    <div className="relative w-full">
                      <div className="flex flex-row gap-8 items-center justify-start p-0 relative w-full">
                        
                        {/* VEO 3 Card */}
                        <div className="flex-1 relative rounded-xl border-2 border-neutral-700">
                          <div className="flex flex-col items-center overflow-hidden relative w-full">
                            <div className="flex flex-col gap-4 items-center justify-start px-6 py-[30px] relative w-full">
                              <div className="relative">
                                <div className="flex flex-col gap-3 items-center justify-center p-0 relative">
                                  <div className="h-[64.34px] relative w-[63px]">
                                    <div className="flex flex-row items-center relative w-full h-full">
                                      <div className="flex flex-row gap-[10.723px] h-[64.34px] items-center justify-start p-[5.3617px] relative w-[63px]">
                                        <div
                                          className="bg-center bg-cover bg-no-repeat h-[53.617px] w-[52.277px]"
                                          style={{ backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750777687604833653_WWSPMJFC.png')` }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="font-semibold text-white text-[24px] text-center">
                                    <p className="leading-[32px]">VEO 3</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="flex flex-col gap-2 items-center justify-start p-0 relative text-center">
                                  <div className="bg-gradient-to-b from-white to-[#626262] bg-clip-text text-transparent font-bold text-[48px]">
                                    <p className="leading-[48px]">1243</p>
                                  </div>
                                  <div className="font-normal text-white text-[16px] tracking-[0.4px]">
                                    <p className="leading-[24px]">Benchmark score</p>
                                  </div>
                                </div>
                              </div>
                              {/* Decorative element */}
                              <div
                                className="absolute left-1 w-20 h-20 top-[4.5px] bg-no-repeat"
                                style={{
                                  backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750778011358586961_mVYVRNJF.png')`,
                                  backgroundPosition: '55.32% 30.77%'
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Seedance Card (Highlighted) */}
                        <div className="relative rounded-xl w-[340px] border-2 border-[#574c13]">
                          <div className="flex flex-col items-center justify-center overflow-hidden relative w-full h-full">
                            <div className="flex flex-col gap-4 items-center justify-center px-6 py-8 relative w-[340px]">
                              <div className="relative">
                                <div className="flex flex-col gap-3 items-center justify-center p-0 relative">
                                  <div
                                    className="bg-center bg-cover bg-no-repeat w-20 h-20"
                                    style={{ backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750777816531907910_9bCzvsom.png')` }}
                                  />
                                  <div className="font-semibold text-white text-[30px] text-center">
                                    <p className="leading-[36px]">Seedance</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="flex flex-col gap-2 items-center justify-start p-0 relative text-center">
                                  <div className="bg-gradient-to-b from-[#dbc970] to-[#eaeaea] bg-clip-text text-transparent font-bold text-[48px]">
                                    <p className="leading-[48px]">1352</p>
                                  </div>
                                  <div className="font-normal text-white text-[16px] tracking-[0.4px]">
                                    <p className="leading-[24px]">Benchmark score</p>
                                  </div>
                                </div>
                              </div>
                              {/* CTA Button */}
                                <a href="https://www.wavespeed.ai/collections/bytedance" className="block bg-gradient-to-r from-[#007bff] to-[#6e00ff] text-white font-bold text-[16px] rounded-xl w-full p-3 text-center no-underline hover:opacity-90 transition-opacity">
                                    Start Using Now
                                </a>
                              {/* Decorative element */}
                              <div
                                className="absolute left-1 w-24 h-24 top-1 bg-no-repeat"
                                style={{
                                  backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750778003646148825_sPpwQ8KP.png')`,
                                  backgroundPosition: '47.72% 44.88%'
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Hailuo AI Card */}
                        <div className="flex-1 relative rounded-xl border-2 border-[rgba(116,42,22,0.5)]">
                          <div className="flex flex-col items-center overflow-hidden relative w-full">
                            <div className="flex flex-col gap-4 items-center justify-start px-6 py-[30px] relative w-full">
                              <div className="relative">
                                <div className="flex flex-col gap-3 items-center justify-center p-0 relative">
                                  <div className="relative">
                                    <div className="flex flex-row items-center relative w-full h-full">
                                      <div className="flex flex-row gap-[10.667px] items-center justify-start p-[5.33333px] relative">
                                        <div
                                          className="bg-center bg-cover bg-no-repeat w-[53.333px] h-[53.333px]"
                                          style={{ backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750777694582259577_Eec7miea.png')` }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="font-semibold text-white text-[24px] text-center">
                                    <p className="leading-[32px]">Hailuo AI</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative">
                                <div className="flex flex-col gap-2 items-center justify-start p-0 relative text-center">
                                  <div className="bg-gradient-to-b from-white to-[#626262] bg-clip-text text-transparent font-bold text-[48px]">
                                    <p className="leading-[48px]">1330</p>
                                  </div>
                                  <div className="font-normal text-white text-[16px] tracking-[0.4px] w-[137px]">
                                    <p className="leading-[24px]">Benchmark score</p>
                                  </div>
                                </div>
                              </div>
                              {/* Decorative element */}
                              <div
                                className="absolute left-1 w-20 h-20 top-[4.5px] bg center bg-contain bg-no-repeat"
                                style={{
                                  backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750778006270661596_t15rBDLN.png')`,
                                  backgroundPosition: '48.62% 48.53%'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="font-medium text-[rgba(255,255,255,0.8)] text-center w-full">
                      <p className="leading-[24px] text-[16px]">
                        <span>*Based on </span>
                        <a
                          className="underline cursor-pointer font-medium"
                          href="https://artificialanalysis.ai/text-to-video/arena?tab=leaderboard"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="underline">Artificial Analysis</span>
                        </a>
                        <span> report</span>
                      </p>
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