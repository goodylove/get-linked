function Button({ children, className, callback }) {
  return (
    <button
      onClick={callback}
      className={`${
        className
          ? className
          : "w-[145px] h-[49px] border-0 text-white rounded-[4px] outline-none  bg-button-gradient"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
