import { useEffect, useState } from 'react'

import initialCards from './cards'
import CardComponent, { Card } from './Card'

const App = () => {
    const [showHidden, setShowHidden] = useState(false)
    const [cardsFiltered, setCardsFiltered] = useState<Card[]>(initialCards.filter(card => !card.hidden || showHidden))

    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [cards, setCards] = useState<Card[]>(cardsFiltered)

    useEffect(() => {
        const newCards = initialCards.filter(card => !card.hidden || showHidden)
        setCardsFiltered(newCards)
        filterCards(selectedTag, newCards)
    }, [showHidden, selectedTag])

    const filterCards = (tag: string | null, newCards = cardsFiltered) => {
        if (tag === null) {
            setCards(newCards)
        } else if (tag === 'Uncategorized') {
            const filteredCards = newCards.filter(card => card.tag === '')
            setCards(filteredCards)
        } else {
            const filteredCards = newCards.filter(card => card.tag === tag)
            setCards(filteredCards)
        }
        setSelectedTag(tag)
    }

    const groupedCards: { [tag: string]: Card[] } = {}
    if (!selectedTag) {
        cards.forEach(card => {
            if (!groupedCards[card.tag]) {
                groupedCards[card.tag] = []
            }
            groupedCards[card.tag].push(card)
        })
    }

    return (
        <div className='container mx-auto'>
            <div className='flex justify-start mb-4 font-medium flex-wrap gap-y-2 mt-2'>
                <button
                    className={`mr-2 px-4 py-2 rounded-md ${
                        selectedTag === null ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'
                    }`}
                    onClick={() => filterCards(null)}
                >
                    All
                </button>
                {Array.from(new Set(cardsFiltered.flatMap(card => card.tag)))
                    .map(tag => tag || 'Uncategorized')
                    .sort()
                    .map(tag => (
                        <button
                            key={tag}
                            className={`mr-2 px-4 py-2 rounded-md ${
                                selectedTag === tag ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'
                            }`}
                            onClick={() => filterCards(tag)}
                        >
                            {tag || 'Uncategorized'}
                        </button>
                    ))}
            </div>
            <div className='flex gap-1 text-white'>
                <input
                    type='checkbox'
                    id='myCheckbox'
                    checked={showHidden}
                    onChange={() => setShowHidden(!showHidden)}
                    className=''
                />
                <label htmlFor='myCheckbox'>Show hidden projects</label>
            </div>
            {!selectedTag ? (
                <div>
                    {Object.entries(groupedCards)
                        .sort()
                        .map(([tag, cards]) => (
                            <div
                                key={tag}
                                className='mb-8'
                            >
                                <h2 className='text-2xl font-semibold mb-4 text-white'>{tag}</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    {cards
                                        .sort((a, b) => a.title.localeCompare(b.title))
                                        .map(card => (
                                            <CardComponent
                                                key={card.id}
                                                card={card}
                                            />
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mb-8'>
                    {cards
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map(card => (
                            <CardComponent
                                key={card.id}
                                card={card}
                            />
                        ))}
                </div>
            )}
        </div>
    )
}

export default App
