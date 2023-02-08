import LoadingSpinner from "./LoadingSpinner"

const CustomSoldier = ({
 handleSubmitCustom, handleSubmitRandom, isLoading, soldierName,  soldierAnimal, setSoldierName,setSoldierAnimal
}) => {
    return (
        <main className="CustomSoldier">
            <form className="CustomSoldierForm" onSubmit={handleSubmitCustom}>
                <label htmlFor="postTitle">Name:</label>
                <input
                    disabled={isLoading}
                    id="soldierName"
                    type="text"
                    required
                    value={soldierName}
                    onChange={(e) => setSoldierName(e.target.value)}
                />
                <label htmlFor="postBody">Code name:</label>
                <input
                    disabled={isLoading}
                    id="soldierAnimal"
                    type="text"
                    required
                    value={soldierAnimal}
                    placeholder="Usually an animal"
                    onChange={(e) => setSoldierAnimal(e.target.value)}
                />
                <button
                    className={isLoading ? "opacityButton" : null}
                    disabled={isLoading} type="submit"
                >
                    Generate New Soldier
                </button>
            </form>

            <form className="CustomSoldierForm" onSubmit={handleSubmitRandom}>
                <button
                    className={isLoading ? "opacityButton" : null}
                    disabled={isLoading}
                    type="submit"
                >
                    Generate Random
                </button>
            </form>
            {isLoading ? <LoadingSpinner /> : <p></p>}
        </main>
    )
}

export default CustomSoldier
