import React from 'react';
import { createServerSide } from "@/utils/supabase/server";
import Link from 'next/link';
import Navlinks from './Navlinks';

const Header = async () => {
    const supabase = createServerSide();

    const { data } = await supabase.auth.getUser();

    return (
        <div>
            <nav className="bg-white py-4">
                <div className="container px-4 mx-auto flex items-center">

                    <div className="flex justify-between items-center">
                        <Link href="/" className="font-bold text-xl text-primary">Md Tech</Link>
                    </div>

                    <div className="md:flex flex-col flex-row ml-auto" id="navbar-collapse">
                        <Navlinks user={data.user} />
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header