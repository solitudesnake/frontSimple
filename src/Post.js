import { Link } from 'react-router-dom';

const Post = ({ soldier, handleDelete, handleEdit }) => {
    // console.log("soldier.description",soldier.description)
    return (
        <article className="post">
            <article className="soldier">
                <p className="soldierName">{soldier.name +' '+soldier.animal}</p>
                {soldier.description.length ?
                    (<>
                        <div className="soldierDescription">
                            {soldier.description.map((description,key) => (
                                <p key={key}>{description}</p>
                            ))}
                        </div>
                    </>) :
                    (<>
                    </>)
                }

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
                        <button className="editButton" onClick={() => handleEdit(soldier._id)}>Retrieve images</button>
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
