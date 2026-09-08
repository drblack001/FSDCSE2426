const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React App Developement');
const h1 = React.createElement('h1' , {style:{color:'black'}} , 'ABES Engineering college');
const img = React.createElement('img' , {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKP9TjpgLskXQS-KB-6jSiA-Tl8r0hkd15alM4KuDt-w&s' , style:{height:'200px', width:'200px'}})

const div =React. createElement('div', {style:{color:'blueviolet' , border:'5px solid blue'}} ,img, h1,h2);

const h21=<h2>Hello Chamar</h2>;  // JSX javascript and XML syntax

root.render(h21);