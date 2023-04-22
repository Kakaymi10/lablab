import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import {useState} from 'react';
import './auth.css'

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth.currentUser)


    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
        
    };
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
            console.log("succes");
        } catch (err) {
            console.error('err')
        }
        
    };

    /*const logout = async () => {
        try{
            await signOut(auth);
        } catch (err) {
            console.error('err')
        }
        
    };*/
    return (
        <div className="auth">
            <div className="signBlock">
            <input
            className="email" 
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}/>

            <input 
            className="password"
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>

            <button 
            className="signIn"
            onClick={signIn}>Sign In</button>

            <button 
            className="signIn"
            onClick={signInWithGoogle}>Sign In with Google</button>

            </div>  
            
            

           
            
        </div>
    )}
