import { FC } from 'react'

export interface Card {
  id: number
  title: string
  description: string
  image: string
  tag: string
  tools: string[]
  demo?: string
  hidden?: boolean
}

interface CardProps {
  card: Card
}

const CardComponent: FC<CardProps> = ({ card }) => {
  return (
    <div
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      className='p-3 rounded-lg shadow-md transition hover:shadow-lg flex flex-col justify-between text-gray-100'
    >
      <div>
        <div
          className='relative w-full h-fit mb-3 rounded-md border border-gray-700 overflow-hidden bg-cover bg-center z-0'
          style={{
            backgroundImage: `url('${card.image || '/img/projects/no-image.jpg'}')`,
          }}
        >
          <div
            className='absolute inset-0 bg-cover bg-center filter blur-sm -z-10'
            style={{ backgroundImage: 'inherit' }}
          ></div>

          <img
            src={card.image || '/img/projects/no-image.jpg'}
            alt={card.title}
            className='mx-auto md:h-[11.75rem] lg:h-[10.35rem] xl:h-[9.65rem] 2xl:h-48 object-contain'
          />
        </div>
        <h2 className='text-xl font-semibold mb-2'>{card.title}</h2>
        <p className='text-sm text-gray-300 mb-3'>{card.description}</p>
      </div>
      <div>
        {!!card.tools?.length && (
          <div className='flex flex-wrap gap-1 items-center'>
            <span>Tools Used:</span>
            {card.tools.map(tool => (
              <span key={tool} className='px-1.5 py-0.5 bg-gray-700 text-xs rounded-full'>
                {tool}
              </span>
            ))}
          </div>
        )}
        {card.demo && (
          <div className='mt-2'>
            <a
              className='font-semibold hover:underline text-blue-400'
              href={card.demo}
              target='_blank'
              rel='noopener noreferrer'
            >
              View Demo
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardComponent
