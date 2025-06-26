import React from 'react';

export default function Applications() {
  // 应用场景数据 - 使用占位符图片，后续可替换为实际霓虹灯图标
  const applications = [
    {
      icon: "https://d2g64w682n9w0w.cloudfront.net/media/images/1750832885761788844_4jEEMWV5.png",
      title: "Game Development",
      description: "Rapidly generate game CGI and cutscenes, accelerating game development process"
    },
    {
      icon: "https://d2g64w682n9w0w.cloudfront.net/media/images/1750832875330682694_RJiknAJV.png",
      title: "Education & Training",
      description: "Transform text-based materials into engaging video courses, enhancing learning experiences"
    },
    {
      icon: "https://d2g64w682n9w0w.cloudfront.net/media/images/1750832880873761461_jfnigc9s.png",
      title: "Film Production",
      description: "Quickly generate concept videos and preview clips, significantly reducing pre-production costs"
    },
    {
      icon: "https://d2g64w682n9w0w.cloudfront.net/media/images/1750832890175596197_EQmCKZdt.png",
      title: "Social Media",
      description: "Provide unlimited creative possibilities for content creators, boosting content production efficiency"
    },
    {
      icon: "https://d2g64w682n9w0w.cloudfront.net/media/images/1750832869085220335_oY8uqmif.png",
      title: "E-commerce Marketing",
      description: "Automatically generate product showcase videos to improve conversion rates"
    },
    {
      icon: "https://d2g64w682n9w0w.cloudfront.net/media/images/1750832866514703175_acktplie.png",
      title: "Advertising",
      description: "Batch generate creative ad videos, quickly test different creative directions"
    }
  ];

  return (
    <section className="bg-[#050303] py-14 px-4 lg:px-[121px]">
      <div className="flex flex-col items-center justify-center max-w-full">
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          
          {/* 主标题 */}
          <h2 className="font-bold text-white text-[32px] leading-[32px] text-center">
            Wide-ranging Applications
          </h2>
          
          {/* 应用卡片网格 */}
          <div className="w-full max-w-[1040px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {applications.map((app, index) => (
                <div 
                  key={index}
                  className="w-full max-w-[308px] h-[296px] rounded-xl border-2 border-neutral-700 p-6 flex flex-col items-center justify-start gap-1"
                >
                  {/* 霓虹灯图标 */}
                  <div 
                    className="w-24 h-24 bg-center bg-cover bg-no-repeat shrink-0"
                    style={{ backgroundImage: `url('${app.icon}')` }}
                  />
                  
                  {/* 应用标题 */}
                  <h3 className="font-bold text-white text-[24px] leading-[32px] text-center mt-2">
                    {app.title}
                  </h3>
                  
                  {/* 应用描述 */}
                  <p className="font-normal text-neutral-50 text-[14px] leading-[22px] text-center flex-1 flex items-center">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
} 