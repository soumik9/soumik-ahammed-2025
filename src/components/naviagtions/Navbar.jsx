"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { cx } from "@/utils/hooks/helper";
import { images, svgs } from "@/assets/asset"
const Navbar = () => {

    const pathname = usePathname();
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="py-2 md:py-5 border-b shadow bg-transparent"
            style={{
                // backgroundImage: "linear-gradient(to right, #0e593b, #076038, #046734, #086d2f, #127427)",
                // backgroundImage: "linear-gradient(to left, #434343 0%, black 100%)",
                backgroundImage: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
                // backgroundImage: "linear-gradient(to right top, #434343, #333333, #242424, #161616, #000000)",
            }}
        >
            <div className="container relative">
                <div className="flex justify-between items-center text-white">
                    <ul className="flex gap-x-8">
                        <li>
                            <Link href={"/"} className="font-semibold text-lg">Home</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-semibold text-lg">Home</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-semibold text-lg">Home</Link>
                        </li>
                    </ul>

                    <Link href={"/"} className="absolute_center top-10 ">
                        <Image
                            src={images.logo}
                            width={150}
                            height={48}
                            alt="logo"
                        // className="w-[150px] h-[72px]"
                        />
                    </Link>

                    <ul className="flex gap-x-8">
                        <li>
                            <Link href={"/"} className="font-semibold text-lg">Home</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-semibold text-lg">Home</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="font-semibold text-lg">Home</Link>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="outline-none md:hidden"
                        onClick={toggleMobileMenu}
                    >
                        <AiOutlineMenu />
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        toggleMenu={toggleMobileMenu}
                        pathname={pathname}
                    />
                )}
            </div>
        </nav >
    );
};

const MobileMenu = ({ isOpen, toggleMenu, pathname }) => {

    const router = useRouter();

    return (
        <div
            className="fixed inset-0 lg:hidden z-50"
        >
            <ul className="flex flex-col justify-center items-center gap-y-6 text-base w-full h-full bg-sc-primary-500">
            </ul>

            <button
                type="button"
                className="outline-none absolute top-10 right-11"
                onClick={toggleMenu}
            >
                <AiOutlineClose />
            </button>
        </div>
    );
};

export default Navbar;