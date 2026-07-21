type ButtonVariant = 'primary' | 'outline' | 'sage' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonSurface = 'light' | 'dark';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  surface?: ButtonSurface;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs leading-4 tracking-[1.2px]',
  md: 'px-7 py-3 text-sm leading-5 tracking-[1.4px]',
  lg: 'px-10 py-4 text-base leading-6 tracking-[1.6px]',
};

const variantClasses: Record<ButtonVariant, Record<ButtonSurface, string>> = {
  primary: {
    light: 'bg-eg-red outline-solid outline-1 outline-eg-red outline-offset-[-1px] text-eg-white hover:bg-eg-red-dark hover:outline-eg-red-dark',
    dark: 'bg-eg-red outline-solid outline-1 outline-eg-red outline-offset-[-1px] text-eg-white hover:bg-eg-red-dark hover:outline-eg-red-dark',
  },
  outline: {
    light: 'outline-solid outline-1 outline-eg-blue-black-40 outline-offset-[-1px] text-eg-blue-black hover:outline-eg-sage-dark',
    dark: 'outline-solid outline-1 outline-eg-white-40 outline-offset-[-1px] text-eg-white hover:outline-eg-sage-dark',
  },
  sage: {
    light: 'bg-eg-sage outline-solid outline-1 outline-eg-sage outline-offset-[-1px] text-eg-blue-black hover:bg-eg-sage-light hover:outline-eg-sage-light',
    dark: 'bg-eg-sage outline-solid outline-1 outline-eg-sage outline-offset-[-1px] text-eg-blue-black hover:bg-eg-sage-light hover:outline-eg-sage-light',
  },
  ghost: {
    light: 'text-eg-blue-black opacity-100 hover:opacity-70',
    dark: 'text-eg-white opacity-100 hover:opacity-70',
  },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  surface = 'light',
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`border-none cursor-pointer inline-flex items-center justify-center font-helvetica font-medium uppercase transition-[background,outline-color,opacity] duration-200 ${sizeClasses[size]} ${variantClasses[variant][surface]} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </button>
  );
}
