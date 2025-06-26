import React from 'react';

// Placeholder images that will be replaced with videos
const imgVideoMultiShot = "https://d2g64w682n9w0w.cloudfront.net/media/videos/1750742743739314473_7cWRPKHE.mp4";
const imgVideoDiverseStyle = "https://d2g64w682n9w0w.cloudfront.net/media/videos/1750081904716023833_DI31YURN.mp4"; 
const imgVideoMotionStability = "https://d2g64w682n9w0w.cloudfront.net/media/videos/1750659156743068321_uL741YVR.mp4";
const imgVideoSemanticPromptFollowing = "https://d2g64w682n9w0w.cloudfront.net/media/videos/1750080331166769335_Eb0hyT36.mp4";

// Arrow icon for the "Get started" button
const arrowIcon = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10L30 20L20 30M30 20H10" stroke="#020617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface GetStartedButtonProps {
  href?: string;
}

function GetStartedButton({ href = "#" }: GetStartedButtonProps) {
  return (
    <a 
      href={href}
      className="bg-slate-950 border border-white rounded-full inline-flex items-center justify-center gap-2.5 pl-1.5 pr-6 py-1.5 w-full max-w-[500px] hover:bg-slate-800 transition-colors no-underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-white rounded-full p-[9px] flex items-center justify-center flex-shrink-0">
        {arrowIcon}
      </div>
      <span className="block w-full h-full text-center font-medium text-white text-[24px] leading-[32px]">
        Get Started
      </span>
    </a>
  );
}

interface VideoPlaceholderProps {
  src: string;
  alt: string;
  // Future video props
  videoSrc?: string;
  isVideo?: boolean;
}

function VideoPlaceholder({ src, alt, videoSrc, isVideo = false }: VideoPlaceholderProps) {
  // Future: When isVideo is true, render video element with autoplay and muted
  if (isVideo && videoSrc) {
    return (
      <video
        className="aspect-[1008/574] w-full bg-center bg-cover bg-no-repeat rounded-lg"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{ objectFit: 'cover' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  // Current: Placeholder image
  return (
    <div
      className="aspect-[1008/574] w-full bg-center bg-cover bg-no-repeat rounded-lg"
      style={{ backgroundImage: `url('${src}')` }}
      aria-label={alt}
    />
  );
}

interface FeatureBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  buttonHref?: string;
  // Future video props
  videoSrc?: string;
  isVideo?: boolean;
}

function FeatureBlock({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  isReversed = false, 
  buttonHref = "#",
  videoSrc,
  isVideo = false 
}: FeatureBlockProps) {
  const content = (
    <>
      {/* Video/Image Section - Always 50% width */}
      <div className="w-1/2 flex-shrink-0">
        <VideoPlaceholder 
          src={imageSrc} 
          alt={imageAlt}
          videoSrc={videoSrc}
          isVideo={isVideo}
        />
      </div>

      {/* Text Section - Always 50% width with max-width constraint */}
      <div className="w-1/2 flex-shrink-0 flex justify-start">
        <div className="flex flex-col gap-8 items-start justify-start h-full w-full max-w-[500px]">
          <div className="flex-1">
            <div className="flex flex-col font-medium gap-4 items-start justify-start text-left w-full">
              <h3 className="text-white text-[30px] leading-[36px] w-full">
                {title}
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] text-[16px] leading-[24px] w-full">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full">
            <GetStartedButton href={buttonHref} />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="max-w-[1200px] w-full">
      <div className={`flex flex-row gap-10 items-center justify-start w-full ${isReversed ? 'flex-row-reverse' : ''}`}>
        {content}
      </div>
    </div>
  );
}

export default function KeyFeatures() {
  return (
    <section className="bg-[#050303] relative w-full">
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="flex flex-col gap-16 items-center justify-center px-[120px] py-10 relative w-full">
          <div className="max-w-[1040px] relative w-full">
            <div className="flex flex-col gap-16 items-center justify-start relative w-full">
              
              {/* Section Title */}
              <h2 className="font-bold text-white text-[32px] leading-[32px] text-center">
                Key features
              </h2>

              {/* Feature 1: Seamless Multi-Shot Narrative */}
              <FeatureBlock
                title="Seamless Multi-Shot Narrative"
                description="A core highlight of the model is its native support for seamless multi-shot narratives. Within a 10-second video, the new model can smoothly generate 2-3 shots seamlessly transitioning between wide, medium, and close-up perspectives, maintaining exceptional continuity in both subject and style, endowing AI-generated videos with cinematic quality and storytelling depth."
                imageSrc={imgVideoMultiShot}
                imageAlt="Seamless Multi-Shot Narrative demonstration"
                buttonHref="https://www.wavespeed.ai/collections/bytedance"
                videoSrc={imgVideoMultiShot}
                isVideo={true}
              />

              {/* Feature 2: Diverse Stylistic Expression */}
              <FeatureBlock
                title="Diverse Stylistic Expression"
                description="From photorealism and cyberpunk to traditional Chinese animation and claymation, Seedance 1.0 can accurately interpret diverse stylistic prompts to support a wide range of creative needs."
                imageSrc={imgVideoDiverseStyle}
                imageAlt="Diverse Stylistic Expression examples"
                isReversed={true}
                buttonHref="https://www.wavespeed.ai/collections/bytedance"
                videoSrc={imgVideoDiverseStyle}
                isVideo={true}
              />

              {/* Feature 3: Exceptional Motion Stability */}
              <FeatureBlock
                title="Exceptional Motion Stability and Realistic Beauty"
                description="The model significantly reduces common issues in traditional AI-generated videos, such as visual glitches and jitteriness, delivering more natural dynamics and realistic physical logic. Utilizing multi-dimensional reward models and feedback-driven learning, the new model achieves industry-leading results in visual stability, vividness of subject motion, and overall aesthetic quality."
                imageSrc={imgVideoMotionStability}
                imageAlt="Motion stability and realistic beauty showcase"
                buttonHref="https://www.wavespeed.ai/collections/bytedance"
                videoSrc={imgVideoMotionStability}
                isVideo={true}
              />

              {/* Feature 4: Precise Semantic & Prompt Following */}
              <FeatureBlock
                title="Precise Semantic & Prompt Following"
                description="Accurately parses natural language prompts, enabling stable control over multi-agent interactions, complex action sequences, and a rich variety of camera movements to precisely translate your textual concepts into videos."
                imageSrc={imgVideoSemanticPromptFollowing}
                imageAlt="Semantic and prompt following precision"
                isReversed={true}
                buttonHref="https://www.wavespeed.ai/collections/bytedance"
                videoSrc={imgVideoSemanticPromptFollowing}
                isVideo={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 