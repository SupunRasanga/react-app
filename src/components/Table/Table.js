import React from "react";
import { users } from "../../DB/Db";


function Table(){
    return(
        <div>
            <div className="container">
            <table className="table table-striped mt-5">
                <thead className="thead-dark">
                    <tr>
                   
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                   
                    </tr>

        
                                        

                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

    )
}

export default Table