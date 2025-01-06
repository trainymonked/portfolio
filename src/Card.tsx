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
                    className='w-full h-48 mb-3 rounded-md object-cover border border-gray-700'
                />
                <h2 className='text-xl font-semibold mb-2'>{card.title}</h2>
                <p className='text-sm text-gray-300 mb-3'>{card.description}</p>
            </div>
            <div>
                {!!card.tools?.length && (
                    <div className='flex flex-wrap gap-1 items-center'>
                        <span>Tools Used:</span>
                        {card.tools.map(tool => (
                            <span
                                key={tool}
                                className='px-1.5 py-0.5 bg-gray-700 text-xs rounded-full'
                            >
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
