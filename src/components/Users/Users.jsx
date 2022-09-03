import React from 'react';
import { useState, useEffect } from 'react';
import style from './Users.module.css'
import GetUsers from '../../Utils/httpClient.js'

function Users() {
    let totalPages = 1;
    const [users, setUsers] = useState([]);
    const [page, setPages] = useState(1);

    function nextPage() {
        if (page <= totalPages) {
            setPages(() => page + 1)
        }
    }

    function prevPage() {
        if (page > totalPages) {
            setPages(() => page - 1)
        }
    }

    useEffect(() => {
        GetUsers(page).then(data => {
            setUsers(data.data)
            totalPages = data.total_pages;
        });
    },
        [page]);

    return (<>
        <div className={style.content}>
            <div className={style.datagrid}>
                <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <div id="paging">
                                    <ul>
                                        <li onClick={prevPage}><p><span>Previous</span></p></li>
                                        <li><p><span>{page}</span></p></li>
                                        <li><p onClick={nextPage}><span>Next</span></p></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            users.map(user => {
                                return <tr key={user.id}>
                                    <td><img className={style.avatar} src={user.avatar} alt="" /></td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default Users;