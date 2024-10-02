import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api";
import { ProductProps } from "../home";
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'
import toast from "react-hot-toast";


export function Product() {
    const [product, setProduct] = useState<ProductProps>()
    const { id } = useParams();
    const { addItemCart } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function getProduct() {
            const item = await api.get(`products/${id}`);
            setProduct(item.data)
        }
        getProduct()
    }, [id])

    function handleAddCartItem(product: ProductProps) {
        toast.success("Produto adicionado no carrinho", {
            style: {
                borderRadius: 10,
                backgroundColor: "#121212",
                color: "#FFF"
            }
        })
        addItemCart(product)
        navigate("/cart")
    }

    return (
        <main className="w-full max-w-7xl px-4 mx-auto my-6">
            {product && (
                <section className="w-full">
                    <div className="flex flex-col lg:flex-row">
                        <img
                            src={product?.cover}
                            alt={product?.title}
                            className="flex-1 w-full max-h-72 object-contain"
                        />
                        <div className="flex-1">
                            <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                            <p className="my-4">{product?.description}</p>
                            <strong className="text-zinc-700/90 text-xl">
                                {product?.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </strong>
                            <button className='bg-zinc-900 p-1 rounded ml-2' onClick={() => handleAddCartItem(product)}>
                                <BsCartPlus size={20} color='#fff' />
                            </button>
                        </div>
                    </div>

                </section>
            )}

        </main>
    )
}