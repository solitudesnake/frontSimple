const CustomSoldier = ({
 handleSubmitCustom, handleSubmitRandom, soldierName,  soldierAnimal, setSoldierName,setSoldierAnimal
}) => {
    return (
        <main className="CustomSoldier">
            <form className="CustomSoldierForm" onSubmit={handleSubmitCustom}>
                <label htmlFor="postTitle">Name:</label>
                <input
                    id="soldierName"
                    type="text"
                    required
                    value={soldierName}
                    onChange={(e) => setSoldierName(e.target.value)}
                />
                <label htmlFor="postBody">Code name:</label>
                <input
                    id="soldierAnimal"
                    type="text"
                    required
                    value={soldierAnimal}
                    placeholder="Usually an animal"
                    onChange={(e) => setSoldierAnimal(e.target.value)}
                />
                <button type="submit">Generate New Soldier</button>
            </form>

            <form className="CustomSoldierForm" onSubmit={handleSubmitRandom}>
                <button type="submit">Generate Random</button>
            </form>
        </main>
    )
}

export default CustomSoldier
