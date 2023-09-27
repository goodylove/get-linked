function Input({ className, placeholder, name, label, value }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={name} className="text-white">
          {label}
        </label>
      )}
      <input
        type="text"
        name={name}
        id={name}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
