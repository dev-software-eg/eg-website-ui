type NavLinkState = 'rest' | 'hover' | 'active';

interface NavLinkProps {
  children: React.ReactNode;
  active?: boolean;
}

export function NavLink({ children, active = false }: NavLinkProps) {
  return (
    <span
      className={`text-xs font-helvetica font-normal uppercase leading-4 tracking-[1.2px] cursor-pointer transition-colors ${
        active ? 'text-eg-red' : 'text-eg-blue-black-55 hover:text-eg-blue-black'
      }`}
    >
      {children}
    </span>
  );
}

interface HoverButtonProps {
  variant: 'primary' | 'outline' | 'sage';
  label: string;
}

const variantClasses: Record<HoverButtonProps['variant'], string> = {
  primary: 'bg-eg-red outline-solid outline-1 outline-eg-red text-eg-white hover:bg-eg-red-dark hover:outline-eg-red-dark',
  outline: 'outline-solid outline-1 outline-eg-blue-black-15 text-eg-blue-black hover:outline-eg-sage-dark',
  sage: 'bg-eg-sage text-eg-blue-black hover:bg-eg-sage-light',
};

export function HoverButton({ variant, label }: HoverButtonProps) {
  return (
    <div
      className={`h-8.5 px-4 -outline-offset-1 inline-flex items-center cursor-pointer transition-[background,outline-color] duration-200 ${variantClasses[variant]}`}
    >
      <span className="text-xs font-helvetica font-medium uppercase leading-4 tracking-[1.2px] text-inherit">
        {label}
      </span>
    </div>
  );
}

export type { NavLinkState };
