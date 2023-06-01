console.log('helo')
const URL =  'https://randomuser.me/api/';

export async function url(){
    try{
        let data = await fetch(URL)
        data = await data.json()
        const person = data.results[0]
        console.log(person)
        const { phone, email } = person;
        const {title,first,last} = person.name
        const {large:image} = person.picture
        const {password} = person.login
        const {age}= person.dob
        console.log(password)
        const {name:streetName,number:streetNumber} = person.location.street
        return{ phone,
            email,
            name:`${title}. ${first} ${last}`,
            image,
            password,
            street:`${streetNumber} ${streetName}`,
            age,
            phone
            }
    }catch(erro){
        erro
    }
}
url()