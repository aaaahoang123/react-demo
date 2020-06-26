import React, {useState} from "react";

function ListPeople({listPeople, addPerson, filterPeople}) {

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

export default ListPeople;
