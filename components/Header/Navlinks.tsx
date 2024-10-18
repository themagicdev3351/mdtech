'use client';

import Link from 'next/link';
import UserDropdown from './UserDropdown';

interface NavlinksProps {
    user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {

    return (

        <div className="flex justify-end">
            {user ?
                <>
                    <UserDropdown user={user} />
                </>
                :
                <>
                    <Link href="/signin" className="p-2 lg:px-4 md:mx-2 text-primary text-center border rounded hover:bg-primary hover:text-white transition-colors duration-300">Signin</Link>
                    <Link href="/signup" className="p-2 lg:px-4 md:mx-2 text-primary text-center border rounded hover:bg-primary hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</Link>
                </>
            }

        </div>
    );
}