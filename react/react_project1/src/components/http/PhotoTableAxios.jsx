import { useState } from 'react';
import axios from 'axios';

// fetch photo data using axios library and display in table
export default function PhotoTableAxios() {
    const [loading, setLoading] = useState(false);
    const [photoArr, setPhotoArr] = useState([]);

    const fetchPhotoData = async () => {
        setLoading(true);
        let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setPhotoArr(response.data);
        setLoading(false);
    }

    return <>
        <h3>Fetch photo Data Using Axios & display in table</h3>
        <button className="btn btn-primary" onClick={fetchPhotoData}>Fetch Data</button>
        {
            loading ?
                <h1>Loading The Data, Please Wait...</h1> :
                <table className="table table-bordered">
                    <tbody>
                        {photoArr.map(photo => {
                            return <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>{photo.albumId}</td>
                                <td>{photo.title}</td>
                                <td>
                                    <img src={photo.url} alt="url" width="100" height="100" />
                                </td>
                                <td>
                                    <img src={photo.thumbnailUrl} alt="" width="100" height="100" />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
        }
    </>
}
