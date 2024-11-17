import { createServerSide } from '@/utils/supabase/server';

const Products = async () => {
    const supabase = createServerSide();


    const { data: products, error } = await supabase
        .rpc('get_products_grouped_by_category');
    
    return (
        <main className="flex min-h-[calc(100vh-74px)] flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">products</h1>
            {
                products?.map((item: any, index: any) => {
                    return (
                        <ul className="li" key={index}>
                            <li>
                                {item.name}
                            </li>
                        </ul>
                    )
                })
            }
        </main>
    );
};

export default Products;
