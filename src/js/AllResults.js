export const AllResults = (database) =>{
    const userRef = database.ref('JSCode/');

    const pushAllResultWhenOnLoad = () =>{ 
        userRef.get()
        .then((snapshot)=> {
            const data = snapshot.val();
            for (let key in data) {
                const tags = data[key].keywords;
                const description = data[key].description;
                const code = data[key].code;

                console.log(code);

                const markup = `
                <div class="card">
                    <h2 class="title">Теги: ${tags}</h2>
                    <p class="description">Описание: ${description}</p>
                    <pre class="language-js line-numbers code">
                        <code class="js">
                            ${code}
                        </code>
                    </pre>
                </div>`;

                document.querySelector('.result').insertAdjacentHTML('beforeend', markup)
            }
        }).catch(()=> {
            console.error("No data available");
        });
    }
    
    pushAllResultWhenOnLoad();
};