import React, {Component} from 'react';
import Column from "./Column";

class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <th>
                        <tr>
                            <Column/>
                        </tr>
                    </th>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Table;