import ReactDOM from 'react-dom/client';

const rootObj = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    return (
        <section>
            <h1>Signup</h1>
            <form>
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
