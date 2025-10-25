
interface inputFieldTypes {
  title: string;
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: React.ReactNode;
  className?: string
}

export const InputField = ({
  title,
  icon,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
  className,
}: inputFieldTypes) => {
  return (
    <div className="w-full">
      <label className="text-xl">{title}</label>
      <div className={`w-full border flex items-center px-2 gap-2 rounded-lg border-stone-400 focus-within:border-2 mb-4 ${className}`}>
        <div className="text-xl">
          {icon}
        </div>
        
        <input
        className="w-full py-2 outline-0 bg-transparent"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
      {errorMessage}
    </div>
  );
}