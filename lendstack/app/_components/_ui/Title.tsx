import React from 'react';

interface CombinedTitleSubtitleProps {
  title: string;
  subtitles: string[];
}

const CombinedTitleSubtitle: React.FC<CombinedTitleSubtitleProps> = ({ title, subtitles }) => {
  return (
    <div className="mx-auto w-full max-w-5xl xl:max-w-6xl py-8">
      <h2 className="font-semibold tracking-tight text-3xl dark:text-white">
        {title}
      </h2>
      <ol className="mt-6 text-muted-foreground px-2 lg:px-0">
        {subtitles.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default CombinedTitleSubtitle;
