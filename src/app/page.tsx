import Image from 'next/image';
import { Inter } from 'next/font/google';
import First from './components/First';
import Second from './components/Second';
import Tirth from './components/third';
import Four from './components/four';
import Five from './components/Fiver';
import Footer from './components/Footer';
import LanguageSwitch from './components/language';

export default function Home() {
  return (
    <div>
      <First />        
      <Second /> 
      <Tirth />
      <Four />
      <Five />
      <Footer />
    </div>
  );
}