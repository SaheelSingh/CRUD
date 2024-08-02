import { useEffect, useState } from 'react';
import './App.css';
import SportsmanList from './components/SportsmanList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddSportsman from './components/AddSportsman';
import EditSportsman from './components/EditSportsman';

function App() {

  const [sportmans, setSportsMan] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:4000/sport')
      const data = await response.json()

      setSportsMan(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
    console.log('fetching Data...')
  }, [])

  const addItem = async (sportman, sport) => {
    try {
      const response = await fetch('http://localhost:4000/sport', {
        method: 'POST',
        body: JSON.stringify({
          sportman: sportman,
          sport: sport
        }),
        headers: {
          'content-type': 'application/json'
        }
      });

      const res = await response.json();

      if (!response.ok) throw new Error(res.message)

      setSportsMan((prevData) => {
        const updatedData = [
          ...prevData,
          {
            sportman: sportman,
            sport: sport
          }
        ];
        return updatedData
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  const updateData = async (id, sportsman, sport) => {
    const response = await fetch(`http://localhost:4000/sport/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        sportsman, sport
      }),
      headers: {
        'content-type': 'application/json'
      }
    })

    if(response.ok) {
      const newData = await response.json()
      console.log(newData)
    } else {
      console.error('Failed to update data');
    }
  }

  const onDelete = async (id) => {
    if (id === undefined) {
      return;
    } else {
      try {
        const response = await fetch(`http://localhost:4000/sport/${id}`, {
          method: 'DELETE'
        })
        const data = await response.json()
        setSportsMan((prevData) => {
          const updatedData = prevData.filter((person) => person.id !== id)
          return updatedData
        })
        console.log(data)
        fetchData()
      } catch (error) {
        console.log(error)
      }
    }

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SportsmanList sportsman={sportmans} loading={loading} onDelete={onDelete} />} />
          <Route path='/addSportman' element={<AddSportsman addItem={addItem} />} />
          <Route path='/edit/:id' element={<EditSportsman updateData={updateData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
