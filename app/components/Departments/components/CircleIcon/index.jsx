import { MdLocalShipping } from "react-icons/md";

export default function CircleIcon({ children }) {
  return (
    <div className="circle-icon-container bg-primaryColor-400 w-16 h-16 flex items-center justify-center border-4 border-white">
      {/* <MdLocalShipping className="text-primaryColor-900 text-4xl" /> */}
      {children}
    </div>
  );
}
