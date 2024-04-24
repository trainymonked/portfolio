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
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            className='p-2 rounded-md shadow-md overflow-hidden flex justify-between flex-col text-white'
        >
            <div>
                <img
                    src={'/portfolio' + card.image}
                    onError={error => {
                        if (
                            error.currentTarget.src &&
                            !error.currentTarget.src.includes('/portfolio/img/projects/no-image.jpg')
                        ) {
                            error.currentTarget.src = '/portfolio/img/projects/no-image.jpg'
                        }
                    }}
                    alt={card.title}
                    className='w-full md:h-[12.5rem] mb-1 rounded-md object-cover border-2 border-black'
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
                                className='px-2 py-0.5 bg-zinc-700 text-sm rounded-full'
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
                            className='font-semibold hover:underline'
                            href={card.demo}
                            target='_blank'
                        >
                            Click here
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardComponent
