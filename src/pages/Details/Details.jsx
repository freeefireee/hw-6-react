
import './details.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Details = ({ buyFunc }) => {
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${params.id}`)
            .then(({ data }) => setData(data))
    }, [])

    return (
        <section className='detail'>
            {Object.keys(data).length === 0 ? (
                <div className="preloader">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={data.image} className='detail-img' alt="" />
                        </div>

                        <div className="col-6">
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <p>
                                <b>category:</b>
                                {data.category}
                            </p>
                            <p>
                                <b>price:</b>
                                ${data.price}
                            </p>
                            <button onClick={() => buyFunc(data)}>buy</button>
                            <button onClick={() => navigate(-1)}>go back</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Details;