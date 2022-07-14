import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Audited Tokens</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pancakeswap-cake-logo.png'
              text='Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.'
              label='Audit + KYC'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.'
              label='Audit'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
