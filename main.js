
 let myLeads = [];
 const saveInput = document.querySelector('.saveInput');
 const input = document.querySelector('.input');
 const unList = document.querySelector('.list')
 const deleteAll = document.querySelector('.delAll')

 const tab = document.querySelector('.tab')

 const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

 let render = (leads)=> {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
    listItems += ` <li> <a target = _blank href = "${leads[i]}">${leads[i]}</a> </li> `
    // const li = document.createElement("li");
    // li.textContent = myLeads [i];
    // unList.append(li)
 }

 unList.innerHTML = listItems

 }

 if (leadsLocalStorage) {
    myLeads = leadsLocalStorage;
    render(myLeads)
 }

 let tabs = [
    {url:"https://www.google.com"}
 ]

 tab.addEventListener ('click', ()=> {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
 })

 

 saveInput.addEventListener ('click', ()=> {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
 })

 

 deleteAll.addEventListener('dblclick', ()=> {
    localStorage.clear()
    myLeads = []
    render(myLeads)

 })
 