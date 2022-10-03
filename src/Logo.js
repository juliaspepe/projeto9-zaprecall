import logo from './img/logo.png';

export default function Logo(){
    return(
        <div className='logo-container'>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </div>
    )
}