let myimage=document.querySelector('img');

	myimage.onclick=function()
		{
			let mysrc=myimage.getAttribute('src');
			if (mysrc==='images/lebron1.jpg')
				 {
				 	myimage.setAttribute('src','images/lebron2.jpg');
				 }	else {
				myimage.setAttribute('src','images/lebron1.jpg');
			}
		}
function sethead(name)	/*创建一个sethead函数，用来实现head变量内容通过函数参数name来自定义*/
	{
		let head=document.querySelector('h1');
		head.textContent='kingdom'+name+'!';
	}
function setusername()	/*创建一个setusername()函数，用来实现sethead()函数中的参数name从浏览器输入获取*/
	{
		let myname=prompt('输入名字');
		localStorage.setItem('name',myname);  /*此处localStorage.setItem()函数中的变量项'name',为函数创建在浏览器中的一个变量，变量名可以自定义*/
		sethead(myname);	/*调用sethead()函数，将浏览器保存的输入数据通过实参myname传递给sethead()函数,实现head变量的内容更改*/
	}
let storedname=localStorage.getItem('name');	/*将setusername()函数中的name变量读取到storedname变量中*/
if (!storedname)	/*此处if……else……语句用来判断setuername()函数中name项是否有内容，若有则将storedname作为实参传递给sethead(),若没有则调用setusername()进行输入，判断是否首次登陆*/
	{
		setusername();
	}
else
	{
		sethead(storedname);
	}
let mybutton=document.querySelector('button');	/*此处将button对象的引用赋值给mybutton*/
mybutton.onclick=setusername;	/*此处将button的触发事件mybtton.onclick绑定给setusername()函数，实现点击按钮触发prompt()输入函数*/
// let head=document.querySelector('h1');
	
// 	head.textContent='hello wor';
// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/lebron1.jpg') {
//       myImage.setAttribute('src', 'images/lebron2.jpg');
//     } else {
//       myImage.setAttribute('src', 'images/lebron1.jpg');
//     }
// }
