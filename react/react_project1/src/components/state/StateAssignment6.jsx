
export default function StateAssignment6() {
    const hour = new Date().getHours();
    let greeting = "";
    if(hour < 12){
        greeting = 'Good Morning';
    }else if(hour < 17){
        greeting = 'Good Afternoon';
    }else{
        greeting = 'Good Evening';
    }
    return <>
        <h3>greeting based on time (good morning, good afternoon, good evening)</h3>
        <div>{greeting}</div>
    </>
}
