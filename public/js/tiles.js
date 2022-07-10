const title = document.querySelectorAll('.title-card');
const nodeList = document.querySelectorAll('div > ul > li > button');

for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].addEventListener('mouseover',()=> {
  	
  		title[i].style.display="block";
  		
  	
  });

  nodeList[i].addEventListener('mouseout',()=> {
  	
  		title[i].style.display="none";
  	
  });
}