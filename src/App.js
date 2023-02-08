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
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
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
      const response = await api.post('/createCustom', CustomSoldier);
      const allPosts = [response.data.soldier, ...soldiers ];
      setSoldiers(allPosts);
      setSoldierName('');
      setSoldierAnimal('');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleSubmitRandom = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/createRandom');
      const allPosts = [response.data.soldier, ...soldiers ];
      setSoldiers(allPosts);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/soldiers/${id}`, updatedPost);
      setSoldiers(soldiers.map(post => post.id === id ? { ...response.data } : post));
      setEditTitle('');
      setEditBody('');
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
              soldierName={soldierName}
              setSoldierName={setSoldierName}
              soldierAnimal={soldierAnimal}
              setSoldierAnimal={setSoldierAnimal}
            />
        </div>
        <div className="showRoom">
          <Home soldiers={soldiers} handleDelete={handleDelete}  />

        </div>
      </div>
    </div>
  );
}

export default App;
