import React from 'react';

export default function GenerationSpeed() {
  // 生成速度数据
  const speedData = [
    { name: 'Seedance 1.0 (720p)', time: '50s', width: '115px', isMain: true },
    { name: 'Google Veo3', time: '90s', width: '205px', isMain: false },
    { name: 'Kling 2.0', time: '170s', width: '291px', isMain: false },
    { name: 'MiniMax Hailuo', time: '300s', width: '396px', isMain: false },
  ];

  // 性能对比数据
  const performanceData = [
    { multiplier: '6x', description: 'faster than Hailuo' },
    { multiplier: '3.4X', description: 'faster than Kling' },
    { multiplier: '1.8X', description: 'faster than Veo3' },
  ];

  return (
    <section className="bg-[#050303] py-6 px-4 lg:px-[120px]">
      <div className="flex flex-row items-center justify-center max-w-full">
        <div className="flex flex-row gap-8 items-stretch justify-center w-full max-w-[1040px]">
          
          {/* Generation Speed Comparison - 左侧大卡片 */}
          <div className="w-1/2 max-w-[504px] bg-black/40 rounded-xl border-2 border-neutral-500 p-6 h-full">
            <div className="flex flex-col gap-8 items-start justify-start h-full">
              {/* 标题 */}
              <h3 className="font-medium text-white text-[32px] leading-[32px] text-left w-full">
                Generation Speed Comparison
              </h3>
              
              {/* 速度对比条形图 */}
              <div className="flex flex-col gap-4 items-start justify-start w-full flex-1">
                {speedData.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3 items-start justify-start w-full">
                    {/* 服务名称 */}
                    <p className={`${item.isMain ? 'font-semibold text-white text-[20px] leading-[28px]' : 'font-medium text-neutral-300 text-[16px] leading-[24px]'} text-left`}>
                      {item.name}
                    </p>
                    
                    {/* 条形图和时间 */}
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <div 
                        className={`h-8 rounded ${item.isMain 
                          ? 'bg-gradient-to-l from-[#007bff] to-transparent' 
                          : 'bg-gradient-to-l from-[#ffffff99] to-transparent'
                        }`}
                        style={{ width: item.width }}
                      />
                      <p className={`${item.isMain ? 'font-semibold text-white text-[20px] leading-[28px]' : 'font-medium text-neutral-300 text-[16px] leading-[24px]'} text-right flex-1`}>
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧两个卡片 */}
          <div className="w-1/2 max-w-[504px] flex flex-col gap-8 items-stretch justify-start h-full">
            
            {/* Performance Comparison - 右上卡片 */}
            <div className="flex-1 bg-black/40 rounded-xl border-2 border-neutral-500 p-6 w-full">
              <div className="flex flex-col gap-8 items-center justify-start h-full">
                {/* 标题 */}
                <h3 className="font-medium text-white text-[32px] leading-[32px] text-left w-full">
                  Performance Comparison
                </h3>
                
                {/* 性能倍数对比 */}
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  {performanceData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col gap-4 items-center justify-end">
                      <p className="font-bold text-[48px] leading-[48px] text-center bg-gradient-to-b from-[#99caff] to-[#007bff] bg-clip-text text-transparent">
                        {item.multiplier}
                      </p>
                      <p className="font-medium text-neutral-300 text-[16px] leading-[24px] text-center">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User Satisfaction - 右下卡片 */}
            <div className="flex-1 bg-black/40 rounded-xl border-2 border-neutral-500 p-6 w-full">
              <div className="flex flex-col gap-8 items-center justify-start h-full">
                {/* 标题 */}
                <h3 className="font-medium text-white text-[32px] leading-[32px] text-left w-full">
                  User Satisfaction
                </h3>
                
                {/* 满意度对比 */}
                <div className="flex flex-row gap-16 items-start justify-start">
                  {/* Seedance */}
                  <div className="flex flex-col gap-3 items-center justify-start">
                    <p className="font-medium text-neutral-300 text-[16px] leading-[24px] text-center">
                      Seedance
                    </p>
                    <p className="font-bold text-[48px] leading-[48px] text-center bg-gradient-to-b from-[#99caff] to-[#007bff] bg-clip-text text-transparent">
                      98%
                    </p>
                  </div>
                  
                  {/* Industry Average */}
                  <div className="flex flex-col gap-3 items-center justify-start h-full">
                    <p className="font-medium text-neutral-300 text-[16px] leading-[24px] text-center">
                      Industry Average
                    </p>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="font-medium text-white text-[32px] leading-[32px] text-center">
                        85%
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