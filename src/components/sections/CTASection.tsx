import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-[#050303] py-14 px-4 lg:px-[121px]">
      <div className="flex flex-col items-center justify-center max-w-full">
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          
          {/* CTA 容器 - 带背景的圆角容器 */}
          <div 
            className="relative rounded-[40px] w-full max-w-[1038px] bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            style={{
              backgroundImage: `url('https://d2g64w682n9w0w.cloudfront.net/media/images/1750837089028989136_2cligb8t.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="flex flex-col items-center justify-center overflow-hidden relative w-full">
              <div className="flex flex-col gap-8 items-center justify-center px-8 lg:px-20 py-16 lg:py-[68px] w-full">
                
                {/* 主标题 */}
                <div className="w-full max-w-[910px]">
                  <h2 className="font-bold text-white text-[32px] lg:text-[48px] text-center leading-[1.24]">
                    Start to create 6X faster with Seedance on WaveSpeedAI
                  </h2>
                </div>
                
                {/* CTA 按钮 */}
                <div className="flex justify-center">
                  <a 
                    href="https://wavespeed.ai/collections/bytedance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl px-8 py-4 hover:bg-gray-100 transition-colors inline-block"
                  >
                    <span className="font-medium text-slate-950 text-[24px] leading-[32px]">
                      Start to use
                    </span>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
} 