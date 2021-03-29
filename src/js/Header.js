export const Header = () =>{
    const toggleButoon = () =>{
        document.querySelector('.container-right .switch input').addEventListener('click', ()=>{
            document.querySelectorAll('.header').classList.toggle('black');
        })
    }
    toggleButoon();
}