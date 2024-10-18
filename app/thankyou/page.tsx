import Link from 'next/link';
import React from 'react';

const ThankYou = () => {

    return (
        <main className="min-h-[calc(100vh-74px)] flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col max-w-2xl border rounded-lg shadow-lg p-4 bg-white">
                <h1 className="text-2xl font-semibold mb-2">Thank You!</h1>
                <p className="text-lg">Your account has been successfully created.</p>

                <p className="mt-4">We appreciate your registration. You can now log in to access your account.
                    <Link className="text-sm underline" href="/signin">
                        Sign In Here
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default ThankYou;
