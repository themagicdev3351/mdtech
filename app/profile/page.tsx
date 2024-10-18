import { createServerSide } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const Profile = async () => {
    const supabase = createServerSide();

    const { data, error } = await supabase.auth.getUser();
    // Redirect to signin if there is an error or the user is not found
    if (error || !data.user) {
        redirect("/signin");
    }

    return (
        <main className="flex min-h-[calc(100vh-74px)] flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className='container'>
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">user</th>
                                <th className="py-3 px-6 text-left">session</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">User ID</td>
                                <td className="py-3 px-6">{data.user.id}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Email</td>
                                <td className="py-3 px-6">{data.user.email}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Created At</td>
                                <td className="py-3 px-6">{new Date(data.user.created_at).toLocaleString()}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Last Sign In</td>
                                <td className="py-3 px-6">{new Date(data.user.last_sign_in_at!).toLocaleString()}</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">Role</td>
                                <td className="py-3 px-6">{data.user.role}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default Profile;
