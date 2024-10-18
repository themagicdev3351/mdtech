import { signout } from "@/actions/auth/actions";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface NavlinksProps {
    user?: any;
}

const UserDropdown = ({ user }: NavlinksProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                onClick={toggleDropdown}
            >
                {user.email}
                {/* {user.email?.slice(0, 4)} */}
                <IoMdClose className="m-1" />
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        <Link href="/profile" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                            Profile
                        </Link>
                        <button
                            onClick={async () => {
                                await signout();
                            }}
                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            role="menuitem"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
