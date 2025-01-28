// React with JS
// const reactHeading = React.createElement("h1",{className:"head",id:"reactHead", children:"Hello World"});

// React with JSX
const jsxHeading = (<>
<h1>Hello JSX</h1>
<p>get raedy</p>
</>)

ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);