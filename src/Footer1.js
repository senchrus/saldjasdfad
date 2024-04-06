import vk from './images/logo-vk.svg';
import tg from './images/logo-tg.svg';
import wp from './images/logo-wp.svg';

function Footer() {
    return (
        <div className='fixed bottom-12 right-24 flex justify-end w-full gap-12 h-8'>
            <img src={vk} alt=''/>
            <img src={tg} alt=''/>
            <img src={wp} alt=''/>
        </div>
    );
}

export default Footer;