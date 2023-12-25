import Image from "next/image";

export default function Input({
  type,
  onChangeText,
  icon,
  placeholder,
  value,
  autoFocus,
}: TextInputProps) {
  return (
    <div className="rounded-xl shadow shadow-[#2C97CF] bg-white flex min-w-[420px] h-[48px] my-4 px-1 overflow-hidden items-center">
      <input
        className="flex-1 h-full px-4 text-[#2C97CF] text-[1em] focus:outline-none"
        type={type}
        onChange={(e)=> onChangeText(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        // value={value}
      />
      {icon ? <Image width={20} height={20} src={icon} alt="" /> : null}
    </div>
  );
}
