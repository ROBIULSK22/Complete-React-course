// This is the Example of Reusable components
function Random(){
    let number = Math.random() * 100;
    return <div>
        <h1>The Random number is:{Math.round(number)}</h1>
    </div>
}
export default Random;