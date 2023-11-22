import React from "react";
import ButtonLink from "./ButtonLink";

const InfoCard = ({ title, data, buttons }) => {
  return (
    <div className="flex justify-start items-center bg-bg-secondary w-full h-36 md:h-36 md:w-96 capitalize rounded-md border-2 border-white m-8">
      <div className="flex flex-col m-4 justify-center">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <h1 className="font-extrabold text-base mb-2">{data}</h1>
        </div>
        <div className="flex items-center justify-center">
          {buttons.map((button, index) => (
            <ButtonLink key={index} link={button.route} text={button.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
