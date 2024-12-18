import Link from "next/link";

export default function Custom404() {
    return (
        <main className="min-h-[calc(100vh-74px)] bg-gray-100 dark:bg-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <AlertCircleIcon className="mx-auto h-12 w-auto text-red-500" />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                        Oops! Page Not Found.
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        The page you are looking for does not exist.
                    </p>
                </div>
                <div className="space-y-2">
                    <Link
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        href="/"
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </main>
    );
}

function AlertCircleIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}
