import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-around w-full my-8 overflow-hidden">
      <div className="flex items-center gap-8 md:justify-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-8 bg-black rounded-full"> </div>
          <h1 className="text-sm font-bold ">AllThingsDesign.academy</h1>
        </div>

        {/* Menu */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <Link href="/programs">Programs</Link>
          </li>
          <li>
            <Link href="/student-works">Student Works</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex gap-8 md:hidden">
        <MenuIcon className="w-8 h-8 md:hidden" />
      </div>

      {/* Action Button  */}
      <div className="hidden gap-2 md:flex">
        <button
          className="px-8 py-2 text-sm font-normal text-black transition-all duration-150 ease-linear bg-transparent border border-gray-500 border-solid rounded-full outline-none hover:border-gray-500 hover:text-white hover:bg-gray-500 active:border-gray-500 focus:outline-none whitespace-nowrap"
          type="button"
        >
          Chat with Advisor
        </button>
        <button
          className="px-8 py-2 text-sm font-normal text-white transition-all duration-150 ease-linear bg-gray-700 border border-gray-500 border-solid rounded-full outline-none active:border-gray-500 whitespace-nowrap focus:outline-none"
          type="button"
        >
          Apply Today
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
