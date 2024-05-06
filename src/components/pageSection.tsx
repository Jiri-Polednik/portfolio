import React from "react";

type PageSectionProps = {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  title?: string;
  bgColor:
    | "violet-light"
    | "violet-dark"
    | "yellow-light"
    | "yellow-dark"
    | "blue-light"
    | "blue-dark"
    | "green-light"
    | "green-dark";
  reverseOnMobile?: boolean;
  content?: React.ReactNode;
};

const PageSection: React.FC<PageSectionProps> = ({
  leftContent,
  rightContent,
  title,
  bgColor,
  reverseOnMobile = false,
  content,
}) => {
  return (
    <div>
      {title && (
        <div className="flex justify-center w-full mt-36">
          <h3 className="text-8xl mb-10 text-center">{title}</h3>
        </div>
      )}
      <div
        className={`flex ${reverseOnMobile ? "flex-col-reverse" : "flex-col"} md:flex-row md:space-x-8 bg-${bgColor} `}
      >
        <div className="w-full md:w-1/2 p-5 m-auto">{leftContent}</div>
        <div className="w-full md:w-1/2 p-5 m-auto">{rightContent}</div>
      </div>
      {content && <div className={`bg-${bgColor}`}>{content}</div>}
    </div>
  );
};

export default PageSection;
