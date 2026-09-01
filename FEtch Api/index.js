// console.log("hiii")


const root = document.getElementById('container');
const button = document.getElementById('btn');
const disp = document.getElementById('text1');
const loader = document.getElementById('loader');

async function fetchData() {

    try {
        loader.innerHTML='<h2 style=color:red> Loading data.....</h2>'
        const serverData = await fetch('https://fakestoreapi.com/products');
        const jsonData = await serverData.json()

        // disp.innerHTML=`${jsonData[1].title}`

        // console.log(jsonData[1].title);

        let table=`<table  border=2px>
        ${
            jsonData.map((ele)=>
                `<tr>
                    <td> <img src=${ele.image} height=200 width=200> </img> </td>
                    <td> ${ele.title}  </td>
                    <td> ${ele.description} </td>
                    <td> ${ele.price} </td>
                    <td> ${ele.category} </td>
                </tr>`
            )
        }
        </table>`

        disp.innerHTML=table;

    } catch (e) {
        console.log("Error is" + e);
    }
    finally {
        loader.innerHTML='';
    }

}

button.addEventListener('click', fetchData);