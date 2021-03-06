///*
//* CHAPTER 1
//*/
//import _ from 'lodash';
///*
//* CHAPTER 2
//*/
//import './style.css';
//import Icon from './icon.svg';
//import Data from './data.xml';
//
///*
//* CHAPTER 3
//*/
//import printMe from './print.js';
//
///*
//* CHAPTER 6
//*/
//import { cube } from './math.js';
//
//
//function component() {
//  let element = document.createElement('div');
//
//  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
//  var output = _.join(['Hello', 'webpack'], ' ');
//  element.innerHTML = _.join([output+':', '5 cubed is equal to ' + cube(5)], ' ');
//  element.classList.add('hello');
//    
//  var myIcon = new Image();
//  myIcon.src = Icon;
//  element.appendChild(myIcon);
//  
//  console.log("Data: "+JSON.stringify(Data));
//    
//    
//    var btn = document.createElement('button');
//    btn.innerHTML = '点击这里，然后查看 console！';
//   btn.onclick = printMe;  // onclick 事件绑定原始的 printMe 函数上
//
//   element.appendChild(btn);
//
//
//  return element;
//}
//
// let element = component(); // 存储 element，以在 print.js 修改时重新渲染
// document.body.appendChild(element);
//
//
// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // Re-render the "component" to update the click handler
//     element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
//     document.body.appendChild(element);
//   })
// }
//
//



///*
//* CHAPTER 7 生产环境
//*/
// import { cube } from './math.js';
//
// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!');
// }
//
//  function component() {
//   var element = document.createElement('pre');
//
//   element.innerHTML = [
//     'Hello webpack!',
//     '5 cubed is equal to ' + cube(5)
//   ].join('\n\n');
//
//    return element;
//  }
//
//  document.body.appendChild(component());




///*
//* CHAPTER 8 代码分离
//*/
// async function getComponent() {
//
//   var element = document.createElement('div');
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
//
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//   return element;
//  }
//
//  getComponent().then(component => {
//    document.body.appendChild(component);
//  });




///*
//* CHAPTER 9 懒加载
//*/
 import _ from 'lodash';

 function component() {
   var element = document.createElement('div');
   var button = document.createElement('button');
   var br = document.createElement('br');

   button.innerHTML = 'Click me and look at the console!';
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.appendChild(br);
   element.appendChild(button);

   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     var print = module.default;
     print();
   });
    return element;
  }
 document.body.appendChild(component());