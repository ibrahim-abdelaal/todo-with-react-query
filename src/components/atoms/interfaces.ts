export interface ButtonProps { 
  name: string;
  onClick: Function;
  disabled: boolean
}

export interface IconButtonProps { 
  children: JSX.Element;
  onClick: Function;
}

export interface InputFieldProps {
  type: string;
  value: string;
  onChange: Function;
  placeholder: string;
}