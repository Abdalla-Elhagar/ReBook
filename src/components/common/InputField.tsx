
interface inputFieldTypes {
  title: string;
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: React.ReactNode;
}

export const InputField = ({
  title,
  icon,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}: inputFieldTypes) => {
  return (
    <div className="w-full">
      <label>{title}</label>
      <div className="input">
        {icon}
        <input
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