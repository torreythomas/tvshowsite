import React, { Component } from 'react';
import Showcontainer from '../../containers/showContainer';
import Footer from '../Footer';
import Scroll from '../Scroll';
import SearchBox from '../Searchbox'


class Shows extends Component {
    render() {
        return (
            <div>
               <SearchBox/>
              <Scroll>
              <Showcontainer/>
              <Showcontainer/>
              <Showcontainer/>
              <Showcontainer/>
              </Scroll>
              <Footer/>
            </div>
          );
    }
 
}

export default Shows;