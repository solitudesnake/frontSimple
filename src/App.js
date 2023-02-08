import Header from './Header';
import CustomSoldier from './CustomSoldier';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import Home from "./Home";

function App() {
  const [soldiers, setSoldiers] = useState([])
  const [soldierName, setSoldierName] = useState('');
  const [soldierAnimal, setSoldierAnimal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/get');
        // console.log("response", response)
        setSoldiers(response.data.soldiers.reverse());
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchPosts().then();
  }, [])


  const handleSubmitCustom = async (e) => {
    e.preventDefault();
    const CustomSoldier = {
      name: soldierName, animal: soldierAnimal };
    try {
      setIsLoading(true)
      const response = await api.post('/createCustom', CustomSoldier);
      const allPosts = [response.data.soldier, ...soldiers ];
      setSoldiers(allPosts);
      setSoldierName('');
      setSoldierAnimal('');
      setIsLoading(false)
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleSubmitRandom = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const response = await api.post('/createRandom');
      const allPosts = [response.data.soldier, ...soldiers ];
      setSoldiers(allPosts);
      setIsLoading(false)
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    try {
      const soldierObj = soldiers.filter(soldier => soldier._id===id)
      const response = await api.patch(`/update/${id}`, soldierObj[0]);
      setSoldiers(soldiers.map(soldier => soldier._id === id ? response.data.newSoldier : soldier));

    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/delete/${id}`);
      const postsList = soldiers.filter(soldier => soldier._id !== id);
      setSoldiers(postsList);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <div className="App">
      <Header title="Metal Gear Soldier Generator" />
      <div className="rowC">
        <div className="creationBox">
            <CustomSoldier
              handleSubmitCustom={handleSubmitCustom}
              handleSubmitRandom={handleSubmitRandom}
              isLoading={isLoading}
              soldierName={soldierName}
              setSoldierName={setSoldierName}
              soldierAnimal={soldierAnimal}
              setSoldierAnimal={setSoldierAnimal}
            />
        </div>
        <div className="showRoom">
          <Home soldiers={soldiers} handleDelete={handleDelete} handleEdit={handleEdit} />

        </div>
      </div>
    </div>
  );
}

export default App;
