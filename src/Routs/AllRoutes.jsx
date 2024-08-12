import {Routes , Route} from 'react-router-dom';
import Shop from '../pages/Shop';
import Skills from '../pages/Skills';
import Stories from '../pages/Stories';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function AllRoutes (){
    return(
        <Routes>
            <Route path='/' element = {<Shop/>}/>
            <Route path='/Skills' element = {<Skills/>}/>
            <Route path='/Stories' element = {<Stories/>}/>
            <Route path='/About' element = {<About/>}/>
            <Route path='/Contact' element = {<Contact/>}/>
        </Routes>
    )
}