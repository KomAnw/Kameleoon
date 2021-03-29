export const AddCode = (database) => {
    const userRef = database.ref('JSCode/');
    const objToSend = {
        'keywords': '',
        'description':'',
        'code':'',
    };

    const clickOnSendButton = () =>{
        document.querySelector('.code-field .send').addEventListener('click', ()=>{
            // TODO валидация
            const unicKey = sendToDataBase(objToSend);
            // TODO unicKey for delete previous sended data
        })
    };

    const clickOnCloseButton = () =>{
        document.querySelector('.code-close').addEventListener('click', (event)=>{
            if (event.currentTarget === document.querySelector('.code-close') 
            || event.currentTarget === document.querySelector('.add-code')) {
                document.querySelector('.add-code').classList.toggle('active');
                document.querySelector('.code-field').classList.toggle('active');
            }
        })
    }

    const inputsHandler = () => {
        const listeners = () =>{
            const root = document.querySelector('.code-field');
            const keywordInput = root.querySelector('.tags');
            const descriptionInput = root.querySelector('.description');
            const codeInput = root.querySelector('.code');

            keywordInput.addEventListener('input', ()=>{
                objToSend.keywords = keywordInput.value;
            })
            descriptionInput.addEventListener('input', ()=>{
                objToSend.description = descriptionInput.value;
            })
            codeInput.addEventListener('input', ()=>{
                objToSend.code = codeInput.value;
            })
        }

        listeners();
    };

    const sendToDataBase = () => {
        const method = userRef.push(objToSend);
        console.log(objToSend.code.length)
        return method;
    };

    
    inputsHandler();
    clickOnSendButton();
    clickOnCloseButton();
}