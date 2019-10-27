/*
* CHAPTER 1
*/
import _ from 'lodash';

/*
* CHAPTER 2
*/
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';

/*
* CHAPTER 3
*/
import printMe from './print.js';


function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
    
    
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  
  console.log("Data: "+JSON.stringify(Data));
    
    
    var btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看 console！';
   btn.onclick = printMe;

   element.appendChild(btn);

    

  return element;
}

document.body.appendChild(component());