import { Link } from 'react-router-dom';

const Post = ({ soldier, handleDelete }) => {
    return (
        <article className="post">
            <article className="soldier">
                <p className="soldierName">{soldier.name +' '+soldier.animal}</p>
                <p className="soldierDescription">{soldier.description}</p>
                {soldier.images.length ?
                    (<>
                    {soldier.images.map((image,key) => (
                        <img key={key} className="squareImage" src={image}/>
                    ))}
                </>) :
                (<>
                    <div className="soldierDescription">
                        <h2>Images Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <button className="editButton">Retrieve images</button>
                    </div>
                </>)
                }
                <button className="deleteButton" onClick={() => handleDelete(soldier._id)}>
                    Delete Soldier File
                </button>
            </article>
        </article>
    )
}

export default Post
