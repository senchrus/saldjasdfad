import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex bg-Black justify-between px-20 items-center">
        <img src = {logo}  alt = "" className=""></img>
        <div className='text-white font-Light flex gap-[150px] text-lg mt-[10px]'>
          <a className = " " href="#home">Книги</a>
          <a href="#contact" className = "">Акции</a>
          <a href="#about"> О нас</a>
          <a href="#about"> Контакты</a>
        </div>
        <p className='text-white font-Light mt-[10px] text-xl'>8 911 180 94 29</p>
    </div>
  );
}

export default App;
