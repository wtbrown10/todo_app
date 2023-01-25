
const person = {
    name: 'Will Brown',
    address: {
        line1: '123 Apple Ave',
        city: 'Providence',
        state: 'Rhode Island'
    },
    profiles: ['twitter', 'Linkin', 'Instagram'],
    printProfile: ()=> {
        person.profiles.map(
            (profile) => console.log(profile)
        )
        console.log(person.profiles[2]);
    }
}


export default function LearningJavaScript(){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}, {person.address.city}</div>
        <div>{person.address.state}</div>
        <div>{ person.printProfile() }</div>
        </>
    )
}