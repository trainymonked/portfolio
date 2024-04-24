import { FC } from 'react'

export interface Card {
    id: number
    title: string
    description: string
    image: string
    tag: string
    tools: string[]
    demo?: string
}

interface CardProps {
    card: Card
}

const CardComponent: FC<CardProps> = ({ card }) => {
    return (
        <div className='bg-white p-2 rounded-md shadow-md overflow-hidden flex justify-between flex-col'>
            <div>
                <img
                    src={card.image}
                    alt={card.title}
                    className='w-full h-[12.5rem] mb-1 rounded-md object-contain'
                />
                <h2 className='text-xl font-semibold mb-2'>{card.title}</h2>
                <p className='mb-2'>{card.description}</p>
            </div>
            <div>
                {!!card.tools?.length && (
                    <div className='flex flex-wrap gap-y-1 gap-x-0.5'>
                        <span className='mr-1'>Tools Used:</span>
                        {card.tools.map(tool => (
                            <span
                                key={tool}
                                className='px-2 py-0.5 bg-zinc-300 text-sm rounded-full'
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                )}
                {card.demo && (
                    <div className='mt-2'>
                        <span className='mr-1'>Demo:</span>
                        <a
                            className='text-blue-600 font-semibold hover:underline'
                            href={card.demo}
                            target='_blank'
                        >
                            {card.demo}
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardComponent
