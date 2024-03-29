import Link from "next/link";

const NavButton = (href, title) => {
  return (
    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-2">
      <Link href={href}>{title}</Link>
    </button>
  );
};

export default NavButton;
