import React from 'react'

const Details = ({ product }) => {

  return (
    <div className="w-full overflow-x-hidden">

      <div className="max-w-[1380px] mx-auto px-5">

        <header className="w-full h-[90px] flex justify-between items-center">

          <p className="text-[19px]">Nombre del sitio</p>

          <div className="flex items-center gap-8">

            <ul className="flex gap-8 text-[15px]">
              <li>Página</li>
              <li>Página</li>
              <li>Página</li>
            </ul>

            <button className="bg-black text-white text-[19px] rounded-md w-22 h-10">
              Botón
            </button>

          </div>

        </header>

        <main className="pt-10 flex gap-18">

          <div className="w-1/2">

            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[400px] object-cover rounded-md"
            />

          </div>

          <div className="w-1/2 flex flex-col gap-4">

            <h1 className="text-3xl font-bold">
              {product.title}
            </h1>

            <p className="text-[17px]">
              {product.price}
            </p>

            <button className="bg-black text-white w-full h-12 rounded-md">
              Añadir al carrito
            </button>

          </div>

        </main>

      </div>

    </div>
  )
}

export default Details