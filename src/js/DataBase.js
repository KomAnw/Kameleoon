export const DataBase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyCu7Zfq9ukP58fc2aVQN_YUsZz1Dk_f-70",
        authDomain: "kameleoon-faq-dev.firebaseapp.com",
        databaseURL: "https://kameleoon-faq-dev-default-rtdb.firebaseio.com",
        projectId: "kameleoon-faq-dev",
        storageBucket: "kameleoon-faq-dev.appspot.com",
        messagingSenderId: "359052101931",
        appId: "1:359052101931:web:00f6efcf78e13c6a7e1d6e"
    };

    firebase.initializeApp(firebaseConfig);
    return firebase.database();
};