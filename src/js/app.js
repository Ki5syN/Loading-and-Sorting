   import {data} from './data.js'
   
   const table = document.querySelector('tbody');
   
   function buildingTable(array) {
    let dataList = array;
    let fragment = document.createDocumentFragment();
   
    dataList.forEach(element => {
        let elementTable = document.createElement('tr');
        
   
        for (let key in element) {
            let cellName = document.createElement('td')
            if (key === 'imdb') {
                cellName.textContent = `imdb:${(element[key])}`
            } else {
                cellName.textContent = (element[key])
            }
   
            elementTable.append(cellName)
        }
   
        fragment.append(elementTable);
   
    });
   
    table.replaceChildren(fragment)
   
   }
   
   function sort(column, direction = 'up') {
    let dataClone = [...data]
   
    const sortData = dataClone.sort((a, b) => {
        if (column === 'title') {
            return direction === 'up' ?
                a.title.localeCompare(b.title) :
                b.title.localeCompare(a.title);
        }
   
        return direction === 'up' ?
            a[column] - b[column] :
            b[column] - a[column];
    });
   
    buildingTable(sortData)
   
   }
   
   function startSort() {
   
    let sortBox = [
        () => sort('id'),
        () => sort('id', 'down'),
        () => sort('title'),
        () => sort('title', 'down'),
        () => sort('year'),
        () => sort('year', 'down'),
        () => sort('imdb'),
        () => sort('imdb', 'down'),
   
    ]
   
    let i = 0;
   
    let intervalID = setInterval(() => {
        sortBox[i]();
   
        i = (i + 1) % sortBox.length;  
   
    }, 2000)
   
   }
   
   export function logic() {
    buildingTable(data)
    startSort()
   }
   
   /** import {data} from './data.js' задание2  с dataset 

    const table = document.querySelector('tbody');

    function buildingTable() {
        let dataList = data;        
        dataList.forEach(element => {
            let elementTable = document.createElement('tr');
            elementTable.dataset.id = element.id;
            elementTable.dataset.title = element.title;
            elementTable.dataset.year = element.year;
            elementTable.dataset.imdb = element.imdb;

            

            for (let key in element) {
                let cellName = document.createElement('td')
                if(key === 'imdb') {
                    cellName.textContent =`imdb:${(element[key])}`                    
                } else {
                cellName.textContent = (element[key])
                }

                elementTable.append(cellName)
            }   
            
             table.append(elementTable);
              
        });       

    }

    function sort(column, direction = 'up') {
        let rowList = [...table.querySelectorAll('tr')];
        
        const fragment = document.createDocumentFragment();        

        const sortData = rowList.sort((a, b) => {
            if (column === 'title') {
                return direction === 'up'
                    ? a.dataset.title.localeCompare(b.dataset.title)
                    : b.dataset.title.localeCompare(a.dataset.title);
            }           

            return direction === 'up'
                ? a.dataset[column] - b.dataset[column]
                : b.dataset[column] - a.dataset[column];
        });

                
        sortData.forEach(item => fragment.append(item));
        

        table.append(fragment);

    }    

    function startSort() {
    
        let sortBox = [
                () => sort('id'), 
                () => sort('id', 'down'),
                () => sort('title'), 
                () => sort('title', 'down'),
                () => sort('year'), 
                () => sort('year', 'down'),
                () => sort('imdb'), 
                () => sort('imdb', 'down'),

        ]

        let i = 0;

        let changeSort = setInterval(() => {            
              sortBox[i]();
             
             i = (i + 1) % sortBox.length;          

       
        },2000)    

    } 
 
   export function logic() {
        buildingTable()
        startSort()
    }*/