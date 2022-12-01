
const heads = ["name", "age"]

const addUser = document.querySelector("#addUser")
const usersList = document.querySelector("#usersList")

const readDataFromStorage = (itemKey="users",resType="json") =>{
    let data = localStorage.getItem(itemKey)
    if(resType=="json") {
        try{
            data = JSON.parse(data)||[]
        }
        catch(e){
            data = []
        }
    }
    return data
}
const writeDataToStorage = (data,itemKey="users")=> localStorage.setItem(itemKey, JSON.stringify(data))
if(addUser)
addUser.addEventListener("submit", (e)=>{
    
    const user = {status: false , id:0}
    heads.forEach(h=> user[h]= addUser.elements[h].value)
    const data = readDataFromStorage()
    data.push(user)
    writeDataToStorage(data)
})

if(usersList){
    const data = readDataFromStorage()
    data.forEach((d, index)=>{
        const li = document.createElement("li")
        d.id = index
        li.innerHTML = "<li>Name: " + d.name + ", age: " + d.age + " <button class='edit' id='"+index+"'> Active: " + d.status + "</button> <button class='delete' id='"+index+"'>delete</button></li>"
        usersList.appendChild(li)
        console.log(data);
       
    })

    

$(".edit").click(function(){
    data[this.id].status = !data[this.id].status
        writeDataToStorage(data)
        location.reload();
})
  


$(".delete").click(function(){
    data.splice(this.id , 1);
     writeDataToStorage(data)
     location.reload();
})


}
