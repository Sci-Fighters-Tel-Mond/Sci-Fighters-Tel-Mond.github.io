import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";


import { TextField, Button } from "@material-ui/core";
import MyTable from "./components/MyTable";

firebase.initializeApp({
	apiKey: "AIzaSyDVHiuaLKCWdGeYbUXP91eTk-KdfXcTWoM",
    authDomain: "ftc-scouting-server.firebaseapp.com",
    databaseURL: "https://ftc-scouting-server.firebaseio.com",
    projectId: "ftc-scouting-server",
    storageBucket: "ftc-scouting-server.appspot.com",
    messagingSenderId: "663608987721",
    appId: "1:663608987721:web:190fa3fb1f18b2cccd2f98",
    measurementId: "G-G2X7CYKH86"
});

const auth = firebase.auth();

const db = firebase.database();
const ref = db.ref("teams");

const ShowData = () => {
	const [snapshot, loading, error] = useObject(ref);
	
	return (
		<div>
			{ auth.currentUser && <Button onClick={(e) => auth.signOut()}>Sign Out</Button> }
			{ loading ? <p>Loading...</p> : <MyTable data={snapshot.val()} /> }
		</div>
	);
};

const SignIn = () => {
	let mail = "";
	let password = "";

	return (
		<div>
			<TextField onChange={(e) => mail     = e.currentTarget.value} type="mail"     placeholder="mail" /> <br/>
			<TextField onChange={(e) => password = e.currentTarget.value} type="password" placeholder="password" /> <br/>
			<Button onClick={async(e) => {
				const signer = await auth.signInWithEmailAndPassword(mail, password);
			}}>Sign In</Button>
		</div>
	);
};

const App = () => {
	const [user, loading, error]: [firebase.User, boolean, firebase.auth.Error] = useAuthState(auth);

	return (
	<div>
		{ user ? <ShowData/> : <SignIn/> }
	</div>
  );
}

export default App;
