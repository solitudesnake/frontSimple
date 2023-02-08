import Feed from './Feed';

const Home = ({ soldiers , handleDelete }) => {

    return (
        <main className="Home">
            {soldiers.length ? (
                <Feed soldiers={soldiers} handleDelete={handleDelete} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No soldiers to display.
                </p>
            )}
        </main>
    )
}

export default Home
