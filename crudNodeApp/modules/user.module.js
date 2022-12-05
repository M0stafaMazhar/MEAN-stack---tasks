heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]

const deal = require("./deal.module")

class User{
    static add(data){
        const user = {}
        heads.forEach(head => {
            if(head.default!=null) 
                user[head.key]= head.default
            else user[head.key] = data[head.key]
        });
        const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }

    static showAll(){
        const allData = deal.readFromJson();
        allData.forEach(user => {
            heads.forEach(head => {
                console.log(head.key+": "+user[head.key]);}
                )}
                )
    }

    static showSingle(data){
        const allData = deal.readFromJson();
        const searchedUser = allData.find(user => user.id == data.id);
        heads.forEach(head => console.log(head.key+": "+searchedUser[head.key]));
        
    }

    
    static edit(inputData){
        const allData = deal.readFromJson();
        const searchedUserIndex = allData.findIndex(user => user.id == inputData.id);
        heads.forEach((head)=>{
            if(inputData[head.key]){
                allData[searchedUserIndex][head.key] = inputData[head.key];
            }
        })
        deal.writeToJson(allData);
    }

    static del(data){
        const allData = deal.readFromJson();
        const searchedUserIndex = allData.findIndex(user => user.id == data.id);
        allData.splice(searchedUserIndex , 1);
        deal.writeToJson(allData);
    }
}

module.exports = User;