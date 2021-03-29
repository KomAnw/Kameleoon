export const Search = () =>{
    const searchByKeyWords = () =>{

    }

    const styleSerachBar = () =>{
        //style after dom ready
        window.onload = () =>{
            document.querySelector('.input').classList.add('inactive');
            document.querySelector('.search .button').classList.add('inactive');
        };

        const addEventListeners = () =>{
            document.querySelector('.input').addEventListener('mouseenter', ()=>{
                document.querySelector('.input').classList.add('active');
                document.querySelector('.search .button').classList.add('active');
            })
            document.body.addEventListener('click', (event)=>{
                if (event.target !== document.querySelector('.input.active') && event.target !== document.querySelector('.button')) {
                    document.querySelector('.input').classList.remove('active');
                    document.querySelector('.search .button').classList.remove('active');
                }
            })
        }
        addEventListeners();
    }
    styleSerachBar();
    searchByKeyWords();
}