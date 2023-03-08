import { useContext } from 'react';
import { Global } from './Global';

function List() {
    const { list } = useContext(Global);


    return (
        <div className="card mt-4">
            <div className="card-header">
            Your selected lucy numbers
            </div>
            <div className="card-body">
            <ul className="list-group">
            {
                        list?.map(p => (<li key={p.id} className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>{p.name} {p.lastName} {p.balance}</h2>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" >ADD</button>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-primary" >REM</button>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className="btn btn-danger" >DELETE</button>
                                    </div>
                                </div>
                            </div>


                        </li>))
                    }
                

            </ul>

                {/* <button className="btn btn-primary" onClick={add}>Add</button> */}
            </div>
        </div>
    )
}

export default List;