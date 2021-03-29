import './vendor/normalize.scss';
import './style.scss';
// import './js/prism';
import { DataBase } from './js/DataBase';
import { Header } from './js/Header';
import { Search } from './js/Search';
import { AddCode } from './js/AddCode';
import { AllResults } from './js/AllResults';
import { BurgerButton } from './js/BurgerButton';

console.log('work1');
const database = DataBase();
Search();
Header();
AddCode(database);
AllResults(database);
BurgerButton();