import React from "react";
type props = {
  value: number;
  max: number;
};

export const ProgressBar = ({ value, max }: props) => {
  const width = (value * 40) / max;
  return (
    <>
      <section className="bar" />
      <style jsx>{`
        section {
          width: 40em;
          height: 3em;
          border: 1px solid white;
          border-radius: 3px;
          position: relative;
        }
        section::before {
          content: "${value}";
          position: absolute;
          left: 0;
          top: 0;
          height: 2.9em;
          background: white;
          width: 10em;
          width: ${width}em;
        }
      `}</style>
    </>
  );
};
