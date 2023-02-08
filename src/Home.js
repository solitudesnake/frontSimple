import Feed from './Feed';

const Home = ({ soldiers , handleDelete, handleEdit }) => {

    return (
        <main className="Home">
            {soldiers.length ? (
                <Feed soldiers={soldiers} handleDelete={handleDelete} handleEdit={handleEdit} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No soldiers to display.
                </p>
            )}
        </main>
    )
}

export default Home
