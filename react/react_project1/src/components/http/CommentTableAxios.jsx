import React, { useEffect, useState } from 'react';
import client from '../../util/client';

// fetch comment data using axios library and display in table
export default function CommentTableAxios() {
    const [commentArr, setCommentArr] = useState([]);

    const fetchComments = async () => {
        let response = await client.get('comments')
        setCommentArr(response.data);
    }
    useEffect(() => {
        fetchComments();
    }, []);

    return <>
        <h3>Fetch comment Data Using Axios & display in table</h3>
        <table className="table table-bordered">
            <tbody>
                {commentArr.map(comment => {
                    return <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.postId}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
