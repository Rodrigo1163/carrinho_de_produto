import { BsCartPlus } from 'react-icons/bs'
export function Home() {
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className='grid grid-cols-1 gap-6 md:grid-col-2 lg:grid-cols-5'>
                    <section className="w-full">
                        <img
                            className='w-full rounded-lg max-h-70 mb-2'
                            src="data:image/jpeg;base64,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"
                            alt="logo do produto"
                        />
                        <p className='font-medium mt-1 mb-2'>Airpods Pro</p>

                        <div className='flex gap-3 items-center'>
                            <strong className='text-zinc-700/90 '>
                                R$ 1000
                            </strong>
                            <button className='bg-zinc-900 p-1 rounded'>
                                <BsCartPlus size={20} color='#fff' />
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}