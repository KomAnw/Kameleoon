export const BurgerButton = () =>{
    const button = document.querySelector('.menu__btn');
    const deleteBtn = document.querySelector('.controls .delete');
    const addBtn = document.querySelector('.controls .add');
    
    const clickOnBurger = () =>{
        button.addEventListener('click', ()=>{
            document.querySelector('.controls').classList.toggle('active');
            button.classList.toggle('active');
            addBtn.classList.toggle('active');
            deleteBtn.classList.toggle('active');
        })
    };

    const clickOnAdd = () =>{
        addBtn.addEventListener('click', ()=>{
            button.click();
            document.querySelector('.add-code').classList.toggle('active');
            document.querySelector('.code-field').classList.toggle('active');
        })
    };

    const clickOnDelete = () =>{

    };
    
    clickOnBurger();
    clickOnAdd();
}