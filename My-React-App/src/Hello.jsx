//This is Example of Dynamic components
function Hello(){
    let myName = "Robiul sk";
    let fullName = () => {
        return "Robiul sk";
    }
    return <div>
        <h1>This is Robiul sk</h1>
        <p>Hello!{myName}.Good morning{fullName()}</p>
    </div>
}
export default Hello;