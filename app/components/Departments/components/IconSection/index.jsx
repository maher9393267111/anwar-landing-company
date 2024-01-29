import CircleIcon from "../CircleIcon";
export default function IconSection({ Icon, heading, text }) {
  return (
    <div className="flex flex-col items-start justify-center">
      <CircleIcon>
        {Icon && <Icon className="text-primaryColor-900 text-4xl" />}
      </CircleIcon>
      <h1 className="mt-2 text-lg font-semibold">{heading}</h1>
      <p className="text-sm mt-2">{text}</p>
    </div>
  );
}
