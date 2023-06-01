import  { url }  from "./getInfo.js";
const btns = document.querySelectorAll('button')
const para =document.querySelector('p')
const h2 = document.querySelector('h2')
const picture = document.querySelector('img')
let globalData
console.log(btns)
//console.log(data)



btns.forEach(async(item)=>{
    item.onclick=()=>{
        switch(item.id || item.className){
            case 'name':
                para.innerText="My Name is" 
                h2.innerText=globalData.name               
            break;
            case 'e-mail':
                para.innerText="My e-mail is" 
                h2.innerText=globalData.email   
            break;
            case 'age':
                para.innerText="My age is" 
                h2.innerText=globalData.age    
            break;
            case 'location':
                para.innerText="My location is" 
                h2.innerText=globalData.street    
            break;
            case 'password':
                para.innerText="My password is" 
                h2.innerText=globalData.password   
            break;
            case 'number':
                para.innerText="My phone number is" 
                h2.innerText=globalData.phone 
            break;
            case 'randomButton':
                 show()
            break;
            default:
                throw 'nothing';

        }
    }
})

const show= async()=>{
    let data = await url()
    picture.src = data.image
    globalData= data
    para.innerText="My Name is" 
    h2.innerText=globalData.name  

}
window.addEventListener('load',show)