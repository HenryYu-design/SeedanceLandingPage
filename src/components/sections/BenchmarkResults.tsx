import React from 'react';

export default function BenchmarkResults() {
  // 占位符图片URLs，后续会被实际雷达图替换
  const textToVideoChart = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750823014887769893_NMURMJGE.png";
  const imageToVideoChart = "https://d2g64w682n9w0w.cloudfront.net/media/images/1750823012084159644_9fIEByus.png";

  return (
    <section className="bg-neutral-950 py-10 px-4 lg:px-[120px]">
      <div className="flex flex-col items-center justify-center max-w-full">
        <div className="flex flex-col gap-8 items-center justify-center w-full">
          {/* 主标题 */}
          <h2 className="font-bold text-white text-[32px] text-center leading-[32px]">
            Benchmark Results
          </h2>
          
          {/* 评估容器 */}
          <div className="max-w-[1040px] w-full rounded-xl border-2 border-neutral-400 p-6">
            <div className="flex flex-col items-center gap-8">
              {/* 副标题 */}
              <h3 className="font-medium text-white text-[32px] text-center leading-[32px]">
                Seed VideoBench-1.0 Evaluation
              </h3>
              
              {/* Text to Video 雷达图容器 */}
              <div className="flex flex-col lg:flex-row gap-8 w-full items-center justify-center">
                {/* Text to Video 雷达图 */}
                <div className="flex flex-col gap-2 items-center w-full lg:w-1/2 max-w-[480px]">
                  <div 
                    className="w-full aspect-[480/352] rounded-lg bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url('${textToVideoChart}')`
                    }}
                  />
                  <p className="font-medium text-neutral-400 text-[16px] text-center leading-[24px]">
                    Text to Video Radar Chart
                  </p>
                </div>
                
                {/* Image to Video 雷达图 */}
                <div className="flex flex-col gap-2 items-center w-full lg:w-1/2 max-w-[480px]">
                  <div 
                    className="w-full aspect-[480/352] rounded-lg bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url('${imageToVideoChart}')`
                    }}
                  />
                  <p className="font-medium text-neutral-400 text-[16px] text-center leading-[24px]">
                    Image to Video Radar Chart
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