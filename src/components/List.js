import React  from 'react'
import ListDetails from './ListDetails'
function List(props){
    const Listemp=[
        {"Empid":501,"empname":"Abhay","phone":7898363528,"city":"Delhi","Qualification":"B.Tech"},
        {"Empid":502,"empname":"Akash","phone":934627293837,"city":"Bengaluru","Qualification":"BCA"},
        {"Empid":503,"empname":"Ajay","phone":93877393792,"city":"Pune","Qualification":"BE"},
        {"Empid":504,"empname":"Bharath","phone":93836528200,"city":"Mumbai","Qualification":"MBA"},
        {"Empid":505,"empname":"Amogh","phone":637263452622,"city":"Ahmedabad","Qualification":"B.Tech"},
        {"Empid":506,"empname":"Chethan","phone":9877653629,"city":"Bengaluru","Qualification":"BCA"},
        {"Empid":507,"empname":"Bhoomi","phone":93735272927,"city":"Pune","Qualification":"BBM"},
        {"Empid":508,"empname":"Rajesh","phone":98736352427,"city":"Mumbai","Qualification":"MCA"},
        {"Empid":509,"empname":"Chaitra","phone":98766553292,"city":"Kolkata","Qualification":"B.Tech"},
        {"Empid":510,"empname":"Chandana","phone":9876543221,"city":"Chennai","Qualification":"BE"},
        {"Empid":511,"empname":"Charan","phone":87292725372,"city":"Ahmedabad","Qualification":"BBM"},
        {"Empid":512,"empname":"Kiran","phone":98724263749,"city":"Pune","Qualification":"MCA"},
        {"Empid":513,"empname":"Achinthya","phone":73840293635,"city":"Mumbai","Qualification":"BSC"},
        {"Empid":514,"empname":"Adithi","phone":9826353628373,"city":"Pune","Qualification":"B.Tech"},
        {"Empid":515,"empname":"Adithya","phone":9383643725,"city":"Kolkata","Qualification":"MSC"},
        {"Empid":516,"empname":"Ganashree","phone":839362738493,"city":"Hyderabad","Qualification":"MCA"},
        {"Empid":517,"empname":"Rakesh","phone":7345672029,"city":"Mumbai","Qualification":"B.Tech"},
        {"Empid":518,"empname":"Divya","phone":9887654372,"city":"Bangalore","Qualification":"BBM"},
        {"Empid":519,"empname":"Pooja","phone":9876543210,"city":"Jaipur","Qualification":"BCA"},
        {"Empid":520,"empname":"Pavan","phone":9765432180,"city":"Mumbai","Qualification":"MBA"},
        {"Empid":521,"empname":"Sumith","phone":8907654321,"city":"Bengaluru","Qualification":"MCA"},
        ]
        return(
            <div>
                <ListDetails mylist={Listemp} />
            </div>
        )
}
export default List
