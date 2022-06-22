import { useState, useEffect } from 'react';
import { RiNetflixFill } from 'react-icons/ri';
import'./styles.scss';
export function Footer(){
    return(
        <footer>
        
           
  <a href='https://www.netflix.com/watch/70196252?source=35&trackId=254743534'target="_blank">
                <RiNetflixFill  color='red'/>
            </a>
        </footer>
    )
}