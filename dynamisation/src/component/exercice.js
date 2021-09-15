function Click(){

    useEffect(() =>{
        fetch(count)
        .then((res) => res.json())
        
    },[]);

    return (
        <div>
        <p>Vous avez cliquez {count} fois</p>
        <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
        </div>
    );

}

/* class Click extends React.Component {
    constructor(){
        this.state={
            count:0
        }
    }

    setCount(){

    }

    render() {
    return (
        <div>
        <p>Vous avez cliquez {count} fois</p>
        <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
        </div>
    );
    }
} */

export default Click;