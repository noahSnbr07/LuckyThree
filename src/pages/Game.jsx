import React, { useContext, useEffect, useState } from 'react';
import '../styles/game.css';
import { BalanceContext, IntermediateValueContext } from '../App';
class CardClass {
    constructor(isFlipped, isPrize) {
        this.isFlipped = isFlipped;
        this.isPrize = isPrize;
    }
}

export default function Game() {
    const [cards, setCards] = useState(Array.from({ length: 9 }, () => new CardClass(false, false)));

    const [balance, setBalance] = useContext(BalanceContext);
    const [intermediateValue, setIntermediateValue] = useContext(IntermediateValueContext);

    const [isBlocked, setBlocked] = useState(false);

    const mixCards = () => {
        const newCards = [];

        for (let i = 0; i < 3; i++) { newCards.push(new CardClass(false, !true)); }
        for (let i = 0; i < 6; i++) { newCards.push(new CardClass(false, !false)); }

        // Shuffle the array
        for (let i = newCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
        }

        setCards(newCards);
    }

    useEffect(() => {
        mixCards();
    }, []);

    const flipCard = (index) => {
        const card = cards[index];
        if (!isBlocked) {
            setCards(prevCards => {
                const updatedCards = [...prevCards];
                updatedCards[index] = { ...updatedCards[index], isFlipped: !updatedCards[index].isFlipped };
                return updatedCards;
            });
        }
        //incorrect guess
        if (!card.isPrize) {
            setBlocked(true);
            setBalance(balance => balance - 100);
            setIntermediateValue(0);

            setTimeout(() => {
                mixCards();
                setBlocked(false);
            }, 750);
        }
        //correct guess
        else {
            setIntermediateValue(intermediateValue => intermediateValue + 75);
        }
    }
    const depositValue = () => {
        setBalance(balance => balance + intermediateValue);
        setIntermediateValue(0);
        mixCards();
    }

    const Card = ({ index }) => {
        return (
            <div onClick={() => { flipCard(index) }} className='flipcard'>
                {cards[index].isFlipped ? (
                    <>
                        <p
                            style={{ color: cards[index].isPrize ? 'green' : 'red' }}>
                            {cards[index].isPrize ? 'Won' : 'Lost'}
                        </p>
                    </>
                ) : (
                    <> 🍀 </>
                )}
            </div>
        );
    }

    return (
        <div className='gamepage'>
            <div className='gameContainer'>
                <div className='gameRow'>
                    <Card index={0} />
                    <Card index={1} />
                    <Card index={2} />
                </div>
                <div className='gameRow'>
                    <Card index={3} />
                    <Card index={4} />
                    <Card index={5} />
                </div>
                <div className='gameRow'>
                    <Card index={6} />
                    <Card index={7} />
                    <Card index={8} />
                </div>
                <div className='finalGameRow'>
                    <button onClick={() => { depositValue(); }}> Deposit </button>
                </div>
            </div>
        </div>
    );
}