import React, { ChangeEvent, ReactNode } from "react";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  hidden?: boolean;
  required?: boolean;
  name?: string;
  value?: string | number; // Adicionando a propriedade value
  onChange?: (e: ChangeEvent<HTMLInputElement>, key: string) => void; // Adicionando a propriedade onChange
}

const Input: React.FC<InputProps> = ({ required, hidden, label, id, type = "text", placeholder, icon, name, value, onChange }) => {

  if (hidden === undefined) hidden = false;
  if (required === undefined) required = false;

  return (
    <div className="mb-4">
      <label className="block mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center w-full h-10 px-2 rounded border border-blue-200 focus:border-blue-500 bg-blue-50">
        {icon && <div className="mr-2">{icon}</div>}
        <input
          required={required}
          className="w-full bg-blue-50"
          style={{ opacity: hidden ? 0 : 1, position: hidden ? 'absolute' : 'relative' }}
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          value={value} // Adicionando a propriedade value
          onChange={(e) => onChange && onChange(e, id)} // Adicionando a propriedade onChange
        
        />
      </div>
    </div>
  );
};

export default Input;