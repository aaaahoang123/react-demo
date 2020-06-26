import React, {useState} from "react";

function ListStudent() {
    const [listPeople, setListPeople] = useState([
        {
            name: 'Phong',
            age: 20,
        },
        {
            name: 'An',
            age: 20
        }
    ]);

    const addPerson = () => {
        setListPeople([
            ...listPeople,
            {
                name: 'Minh',
                age: 33
            }
        ])
    };

    const filterPeople = () => {
        setListPeople(
            listPeople.filter(people => people.name !== 'Minh')
        );
    };

    return (
        <div>
            <button onClick={addPerson}>Thêm người</button>
            {
                listPeople.map(person => (
                    <div>
                        <span style={{marginRight: '20px'}}>Tên {person.name}</span>
                        <span>Tuổi {person.age}</span>
                    </div>
                ))
            }
            <button onClick={filterPeople}>Bớt người</button>
        </div>
    );
}

export default ListStudent;
