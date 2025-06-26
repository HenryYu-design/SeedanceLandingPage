import React from 'react';

export default function ArenaAndCost() {
  // 金色第一名徽章图片 - 可以使用占位符或实际图片URL
  const firstPlaceIcon = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750778003646148825_sPpwQ8KP.png";

  return (
    <section className="bg-[#050303] py-6 px-4 lg:px-[120px]">
      <div className="flex flex-col items-center justify-center max-w-full">
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          <div className="max-w-[1040px] w-full">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-start w-full">
              
              {/* Arena ELO global Card */}
              <div className="flex-1 bg-black/40 rounded-xl border-2 border-neutral-500 p-6">
                <div className="flex flex-col gap-8 items-center">
                  {/* 标题 */}
                  <h3 className="font-medium text-white text-[32px] leading-[32px] text-left w-full">
                    Arena ELO global
                  </h3>
                  
                  {/* 内容区域 */}
                  <div className="flex flex-row items-center w-full">
                    <div className="flex flex-row gap-4 items-center justify-start px-8 py-0 w-full">
                      {/* 第一名徽章 */}
                      <div 
                        className="w-[120px] h-[120px] bg-no-repeat bg-center shrink-0"
                        style={{ 
                          backgroundImage: `url('${firstPlaceIcon}')`,
                          backgroundPosition: '47.72% 44.88%'
                        }}
                      />
                      
                      {/* 文字内容 */}
                      <div className="flex-1">
                        <div className="flex flex-col gap-4 items-start justify-center w-full text-center">
                          <p className="font-medium text-white text-[20px] leading-[28px] w-full">
                            Winner in
                          </p>
                          <p className="font-bold text-[48px] leading-[48px] w-full bg-gradient-to-b from-[#99caff] to-[#007bff] bg-clip-text text-transparent">
                            14,000
                          </p>
                          <p className="font-medium text-white text-[20px] leading-[28px] w-full">
                            real user comparisons
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Start Free Trial 按钮 */}
                    <a href="https://www.wavespeed.ai/collections/bytedance" className="bg-[#007bff] rounded-lg w-full p-3 flex items-center justify-center cursor-pointer">
                        <span className="font-bold text-white text-[16px] leading-[24px]">
                            Start Free Trial
                        </span>
                    </a>
                </div>
              </div>

              {/* Cost Analysis Card */}
              <div className="flex-1 flex flex-col self-stretch bg-black/40 rounded-xl border-2 border-neutral-500 p-6">
                <div className="flex flex-col gap-8 items-center h-full">
                  {/* 标题 */}
                  <h3 className="font-medium text-white text-[32px] leading-[32px] text-left w-full">
                    Cost Analysis
                  </h3>
                  
                  {/* 价格对比区域 */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-row gap-8 items-start justify-start h-full">
                      
                      {/* Seedance 1.0 Lite 列 */}
                      <div className="h-full">
                        <div className="flex flex-col gap-3 h-full items-start justify-start">
                          <p className="font-medium text-neutral-300 text-[16px] leading-[24px] text-left">
                            Seedance 1.0 Lite
                          </p>
                          <div className="flex-1 w-full">
                            <div className="flex flex-row gap-3 items-center justify-start h-full">
                              <span className="font-bold text-[48px] leading-[48px] text-center bg-gradient-to-b from-[#99caff] to-[#007bff] bg-clip-text text-transparent">
                                $0.08
                              </span>
                              <span className="font-medium text-white text-[16px] leading-[24px] text-left">
                                per video
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Competitor Average 列 */}
                      <div className="flex-1 h-full">
                        <div className="flex flex-col gap-3 items-start justify-start h-full">
                          <p className="font-medium text-neutral-300 text-[16px] leading-[24px] text-left">
                            Competitor Average
                          </p>
                          <div className="flex-1">
                            <div className="flex flex-row gap-3 h-full items-center justify-start">
                              <span className="font-medium text-white text-[32px] leading-[32px]">
                                $0.40
                              </span>
                              <span className="font-medium text-white text-[16px] leading-[24px] text-left">
                                per video
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 底部说明 */}
                  <p className="font-medium text-neutral-300 text-[16px] leading-[24px] text-center w-full">
                    *Based on 5s video
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 