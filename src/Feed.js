import Post from './Post';

const Feed = ({ soldiers,handleDelete, handleEdit }) => {
    return (
        <>
            {soldiers.map(soldier => (
                <Post key={soldier._id} soldier={soldier} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
        </>
    )
}

export default Feed
