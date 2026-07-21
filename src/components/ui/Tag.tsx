export type TagVariant = "outline" | "filled";

interface TagProps {
  label: string;
  variant: TagVariant;
}

const variantClasses: Record<TagVariant, string> = {
  outline: "bg-transparent outline-solid outline-[1.5px] outline-eg-blue-black-95 outline-offset-[-1.5px] text-eg-blue-black-95",
  filled: "bg-eg-red text-eg-bg-light",
};

export function Tag({ label, variant }: TagProps) {
  return (
    <span
      className={`px-3 py-1.75 flex justify-center items-center font-grotesk-b text-[12.5px] font-medium leading-[16.5px] tracking-[0.5px] ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
