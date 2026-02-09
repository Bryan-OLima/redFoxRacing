import { signOut, type User } from "firebase/auth";
import { auth } from "../../firebaseConfig";

interface MainPageProps {
    user: User;
}

function MainPage({user}: MainPageProps) {
    const handleLogOut = () =>{
        signOut(auth)
            .then( () => {
                console.log("Deslogado com sucesso", user.displayName);
 
            })
            .catch((err) => console.error(err))
    }
    console.log('mainpage log. user: ', user)
    return (
        <>
            <h1>welcome {user.displayName}</h1>
            <button onClick={handleLogOut}>Deslogar</button>
        </>
    );
}

export default MainPage