import ReactDOM from 'react-dom/client';

const rootObj = ReactDOM.createRoot(document.getElementById('root'));

function signupFormSubmit(evt) {
    const formData = new FormData(evt.currentTarget);
    const dataEmail = formData.get('emailName');
    const dataPwd = formData.get('passwordName');
    console.log(`* I * (dataEmail, dataPwd) is (${dataEmail}, ${dataPwd})`)
}

function App() {
    return (
        <section>
            <h1>Signup</h1>
            <form onSubmit={signupFormSubmit} method="GET">
                <p>
                    <label htmlFor="emailId">Email:</label>
                    <input id="emailId" name="emailName" type="email" placeholder="joe.schmoe@email.com" />
                </p>
                <p>
                    <label htmlFor='passwordId'>Password:</label>
                    <input id='passwordId' name='passwordName' type="password" />
                </p>
                <input type='submit' value='Submit' />
            </form>
        </section>
    );
}

rootObj.render(<App />);

/* Default behaviour - page reloads, points to http://localhost:5173/?emailName=a%40a.pl&passwordName=asd
function signupFormSubmit(evt) {
    const formData = new FormData(evt.currentTarget);
    const dataEmail = formData.get('emailName');
    const dataPwd = formData.get('passwordName');
    console.log(`* I * (dataEmail, dataPwd) is (${dataEmail}, ${dataPwd})`)
}
            <form onSubmit={signupFormSubmit} method="POST">
            <form onSubmit={signupFormSubmit} method="GET">
I think there is a lot more going on behind the scene. POST method leads to an error: 404
GET also attempts to reload the page, the address contains parameters, but there is no error.
*/
