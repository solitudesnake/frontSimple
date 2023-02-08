import Post from './Post';

const Feed = ({ soldiers,handleDelete }) => {
    return (
        <>
            {soldiers.map(soldier => (
                <Post key={soldier._id} soldier={soldier} handleDelete={handleDelete} />
            ))}
        </>
    )
}

export default Feed
