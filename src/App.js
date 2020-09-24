import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from './api/dataSet'
import _ from 'lodash'


const getPoints = (data) => {
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const pointsCalc = data.map(purchase => {
    let pointsPer = 0;
    let doublePoints = purchase.money_spent -100

    if (doublePoints > 0){
      pointsPer += (doublePoints * 2);

    }
   if (purchase.money_spent){
      pointsPer += 50;
    }

    const month = new Date(purchase.date).getMonth();
    return {...purchase, pointsPer, month}
  })

  let perCustomer = {}
  let totalCustomerPoints = {}
  pointsCalc.forEach(pointsCalc => {
    let {customer_id, name, month, pointsPer} = pointsCalc;   
    if (!perCustomer[customer_id]) {
      perCustomer[customer_id] = [];      
    }    
    if (!totalCustomerPoints[customer_id]) {
      totalCustomerPoints[name] = 0;
    }
    totalCustomerPoints[name] += pointsPer;
    if (perCustomer[customer_id][month]) {
      perCustomer[customer_id][month].pointsPer += pointsPer;
      perCustomer[customer_id][month].monthNumber = month;
      perCustomer[customer_id][month].numTransactions++;      
    }
    else {
      
      perCustomer[customer_id][month] = {
        customer_id,
        name,
        monthNumber:month,
        month: months[month],
        numTransactions: 1,        
        pointsPer
      }
    }    
  });
  let total = [];
  for (var key in perCustomer) {    
    perCustomer[key].forEach(row=> {
      total.push(row);
    });    
  }
  console.log("Monthly", perCustomer);

  
  let totperCustomer = [];
  for (key in totalCustomerPoints) {    
    totperCustomer.push({
      name: key,
      points: totalCustomerPoints[key]
    });    
  }
  console.log("Andrew Total: ", total[0].pointsPer + total[1].pointsPer + total[2].pointsPer)
  console.log("John Total: ", total[3].pointsPer + total[4].pointsPer + total[5].pointsPer)
  return {
    allPoints: total,
    pointsCalc,
    totalCustomerPoints:totperCustomer
  };
 

}


function App() {
  const [purchaseData, setPurchaseData] = useState(null);

  useEffect(() => { 
    fetch().then((data)=> {             
      const results = getPoints(data);      
      setPurchaseData(results);
    });
  },[]);


return (
<h1 style={{marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>Check Console</h1>
)
 
}

export default App;


