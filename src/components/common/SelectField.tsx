

interface selectFieldTypes{
  title: string;
  icon: React.ReactNode;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[]
}


export const SelectField = ({ title, icon, value, onChange, options }: selectFieldTypes) => {

  return(
    <div className="w-full">
    <label htmlFor="">{title}</label>
      <div className="input">
        {icon}
        <select
          className="h-10 w-full pl-10 border  focus:outline-none rounded-lg"
        value={value}
          onChange={onChange}
        >
          {options.map((category:string,index:number) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </div>

      </div>

  )
}
