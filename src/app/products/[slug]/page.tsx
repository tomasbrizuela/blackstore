interface ProductParams {
    params: {
        slug: string
    }
}

export default async function Slug({ params }: ProductParams) {
    let { slug } = await params;
    const isId = Number(slug);
    return (
        <div className='flex flex-col justify-center items-center w-screen h-80 gap-3'>
            <h1 className="font-bold text-4xl">Welcome to your home page</h1>
            <h2>{isId ? slug + "Es un id" : slug + "Es una category"}</h2>
        </div>
    )
}