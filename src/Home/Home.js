import React, { useState, useEffect } from 'react';
import { NewBookForm } from '../NewBookForm/NewBookForm';
import mountainImg from '../assets/mountain.svg';
import treesImg from '../assets/trees.svg'
import sandhillImg from '../assets/sandhill.svg';
import sandcastleImg from '../assets/sandcastle.svg';
import topsoilImg from '../assets/topsoil.svg';
import CurrentBookRainbow from '../CurrentBookRainbow/CurrentBookRainbow';
import { getCurrentBooks } from '../apiCalls';
import { Redirect } from 'react-router-dom';
import { Header } from '../Header/Header';
import FinishedBook from '../Celebration/Celebration';


export const Home = ({currentUser}) => {
    console.log("user", currentUser)
    const [displayNewBookForm, setDisplayNewBookForm] = useState(false);
    const [clickedBook, setClickedBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentBooks, setCurrentBooks] = useState([]);
    
    const fetchCurrentBooks = async () => {
      const gotBooks = await getCurrentBooks();
      setCurrentBooks(gotBooks);
      setIsLoading(false);
      console.log('in Fetch', currentBooks)
    }

    useEffect(async () => {
      await fetchCurrentBooks()
      console.log('HomeUseEffect', currentBooks, currentBooks.length > 0, isLoading);
    }, [])

    return (
        <main>
          <Header currentUser={currentUser}/>
          <div className='navigation-wrapper'>
            <img
              className='mountain'
              src={mountainImg}
              alt='add a book button'
              onClick={()=>setDisplayNewBookForm(true)}
            />
            <img className='trees' src={treesImg} alt='trees'/>
            <img className='sandhill' src={sandhillImg} alt='sandhill'/>
            <img className='trees' src={treesImg} alt='trees'/>
            <img
              className='sandcastle'
              src={sandcastleImg}
              alt='sandcastle'
            />
          </div>
          <img className='topsoil' src={topsoilImg} alt='Feel the grass at the top of the earth and dig deep to find your books to start your journey.' />
          {!isLoading && 
            <CurrentBookRainbow 
              data={currentBooks} 
              setClickedBook={setClickedBook}
            />
          }
          {displayNewBookForm && 
            <NewBookForm 
              setDisplay={setDisplayNewBookForm}
            />
          }
          {clickedBook && 
            <Redirect 
              to={{
                pathname: `/books/${clickedBook.attributes.title}`,
                state: { book: clickedBook }
              }}
            ></Redirect> 
          }
          <FinishedBook currentUser={currentUser}/>
        </main>
    )
}
