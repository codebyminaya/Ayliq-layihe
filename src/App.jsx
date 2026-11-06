
import React, { useState } from 'react'

import image from './assets/image.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'

import Details from './components/Details/Details'

const link = [
  { id: 1, title: 'Página' },
  { id: 2, title: 'Página' },
  { id: 3, title: 'Página' },
]

const cards = [
  {
    id: 1,
    title: 'Subtítulo',
    text: 'Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. ',
    img: image1,
    price: '10,99 $',
  },
  {
    id: 2,
    title: 'Subtítulo',
    text: 'Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. ',
    img: image2,
    price: '10,99 $',
  },
  {
    id: 3,
    title: 'Subtítulo',
    text: 'Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. ',
    img: image3,
    price: '10,99 $',
  },
]

const App = () => {

  const [selectedCard, setSelectedCard] = useState(null)

  if (selectedCard) {
    return <Details product={selectedCard} />
  }

  return (
    <div className="w-full overflow-x-hidden flex justify-center">

      <main className="text-black w-full max-w-[1380px] mx-auto  pt-8 flex flex-col gap-12">

        <header className="flex justify-between items-center">

          <p className="text-[19px]">Nombre del sitio</p>

          <div className="flex items-center gap-8">
            <ul className="flex gap-8 text-[15px]">
              {link.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>

            <button className="bg-black text-white text-[19px] rounded-md w-22 h-10">
              Botón
            </button>
          </div>

        </header>

        <div className="hero flex flex-col gap-5">

          <div className="w-[628px] flex flex-col gap-4">

            <h1 className="text-4xl font-bold">
              Título de la página de inicio
            </h1>

            <p className="text-neutral-700 text-[18px]">
              Subtítulo que establece el contexto, comparte más información
              sobre el sitio web o, en general, motiva a la gente a seguir
              navegando.
            </p>

          </div>

          <button className="bg-black text-white text-xl rounded-md w-36 h-16">
            Botón
          </button>

          <img
            src={image}
            alt="Hero"
            className="w-full h-[580px] rounded-md object-cover"
          />

        </div>

        <section className="flex flex-col gap-12 h-[400px]">

          <h1 className='text-5xl font-bold'>Encabezado de sección</h1>

          
          

          <div className="flex h-[300px] gap-[22px] w-full ">
            

            {cards.map((card) => (

              <div
                key={card.id}
                className="flex-1 min-w-0 flex flex-col gap-4"
              >

                <img
                  src={card.img}
                  alt={card.title}
                  onClick={() => setSelectedCard(card)}
                  className="w-full rounded-md aspect-square object-cover cursor-pointer"
                />

                <h3 className="text-[17px] font-medium">
                  {card.title}
                </h3>

                <p className="text-neutral-500 text-[17px]">
                  {card.text}
                </p>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  )
}

export default App
