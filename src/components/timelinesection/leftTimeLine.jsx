function LeftTimeLine({ title, subtitle }) {
  return (
    <div className="md:leading-[30px] md:text-right leading-[27px]  text-start  ">
      <h3 className=" text-custom-highlight text-[13px]">{title} </h3>
      <p className="text-white text-[14px] w-[436px] h-[48px] md:text-end font-[400] font-montserrat">
        {subtitle}
      </p>
    </div>
  );
}

export default LeftTimeLine;

export const MonthTime = () => {
  return (
    <div className="text-[18px] font-[700] leading-[70.67px] text-custom-light">
      November 18, 2023
    </div>
  );
};

export function Righttime({ title, subtitle }) {
  return (
    <div className="text-start">
      <h3 className=" text-custom-highlight leading-[20px]">{title}</h3>
      <p className="text-white text-[14px] w-[436px] h-[48px] font-montserrat text-start font-[400]">
        {subtitle}
      </p>
    </div>
  );
}
