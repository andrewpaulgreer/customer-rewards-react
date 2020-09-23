export default Data = ()=> {
    return Promise.resolve(
        [
            {
               customer_id: 1,
               money_spent: 200,
               name: "Andrew",
               date: "09-07-2020" 
            },
            {
                customer_id: 1,
                money_spent: 100,
                name: "Andrew",
                date: "10-07-2020" 
             },
             {
                customer_id: 1,
                money_spent: 45,
                name: "Andrew",
                date: "11-07-2020" 
             },
             {
                customer_id: 2,
                money_spent: 190,
                name: "John",
                date: "09-07-2020" 
             },
             {
                customer_id: 2,
                money_spent: 120,
                name: "John",
                date: "10-07-2020" 
             },
             {
                customer_id: 2,
                money_spent: 300,
                name: "John",
                date: "10-07-2020" 
             }
        ]
    )
}