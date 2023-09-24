function Title({ title, text }) {
  return (
    <div className=" flex flex-col justify-center items-center md:items-start">
      <h2 className="text-white text-[22px] leading-[20.56px] my-2 font-[700] font-clash">
        {title}{" "}
      </h2>
      <h3 className=" text-custom-highlight text-[22px] leading-[20.56px] font-[700] font-clash">
        {text}
      </h3>
    </div>
  );
}

export default Title;
