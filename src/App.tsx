import { useState, useEffect } from 'react';
import './App.css'
import MainPage from './pages/main/Index';
import {useNavigate, type NavigateFunction } from 'react-router-dom';
import { firebaseConfig } from './firebaseConfig';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import LoginPage from './pages/login/Index';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return() => unsub();
  },[]);
  
  
  if (loading) return <div> Loading...</div>
  return (
    <>
      {user? (
        <MainPage user = {user} />
        ) : (
          <LoginPage />
        )
      }
    </>
  )
}

export default App