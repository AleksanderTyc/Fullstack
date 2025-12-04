import ReactDOM from 'react-dom/client';

const rootObj = ReactDOM.createRoot(document.getElementById('root'));

function signupFormSubmit(formData) {
    // const dataEmail = formData.get('emailName');
    // const dataPwd = formData.get('passwordName');
    // const dataDescr = formData.get('descrName');
    // const dataEmplStatus = formData.get('emplStatusName');
    // const dataDietRestr = formData.getAll('dietRestrName');
    // const datadropDown = formData.get('dropDownName'); // If value prop is set on <option> element, value will be returned.
    // console.log(`* I * datatype of dataDietRestr is ${typeof dataDietRestr}, ${dataDietRestr}`, dataDietRestr);
    // console.log(`* I * datadropDown is`, datadropDown);

    // console.log(`* I * (dataEmail, dataPwd, dataDescr, dataEmplStatus, dataDietRestr) is (${dataEmail}, ${dataPwd}, ${dataDescr}, ${dataEmplStatus}, ${dataDietRestr})`)

    // Object from Entries method:
    const formObject = Object.fromEntries(formData);
    const formObjectModd = { ...formObject, dietRestrName: formData.getAll('dietRestrName') };
    console.log(`* I * formObject is`, formObject);
    console.log(`* I * formObjectModd is`, formObjectModd);

}

function App() {
    return (
        <section>
            <h1>Signup</h1>
            <form action={signupFormSubmit}>

                <p>
                    <label htmlFor="emailId">Email:</label>
                    <input id="emailId" name="emailName" type="email" defaultValue="joe.schmoe@email.com" />
                </p>

                <p>
                    <label htmlFor='passwordId'>Password:</label>
                    <input id='passwordId' name='passwordName' type="password" />
                </p>

                <p>
                    <label htmlFor='descrId'>Description:</label>
                    <textarea id='descrId' name='descrName' />
                </p>

                <fieldset>
                    <legend>Employment status</legend>
                    <input id='radio1Id' name='emplStatusName' type="radio" value='O1' defaultChecked={true} />
                    <label htmlFor='radio1Id'>Unemployed</label>
                    <input id='radio2Id' name='emplStatusName' type="radio" value='O2' />
                    <label htmlFor='radio2Id'>Retired</label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions</legend>
                    <input id='check1Id' name='dietRestrName' type="checkbox" value='D1' />
                    <label htmlFor='check1Id'>Nuts</label>
                    <input id='check2Id' name='dietRestrName' type="checkbox" value='D2' defaultChecked={true} />
                    <label htmlFor='check2Id'>Honey</label>
                </fieldset>

                <p>
                    <label htmlFor='dropDownId'>Choose colour</label>
                    <select id='dropDownId' name='dropDownName' defaultValue="" required>
                        <option disabled value="">-- Choose an option --</option>
                        <option value="red">Red</option>
                        <option>Yellow</option>
                        <option>Blue</option>
                        <option>Orange</option>
                    </select>
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

/* Handling onSubmit event in JS - necessary to get FormData manually, prevent the page reload and force form cleanup
function signupFormSubmit(evt) {
    evt.preventDefault(); // Prevents page reload, but also prevents form cleanup
    const formData = new FormData(evt.currentTarget);
    const dataEmail = formData.get('emailName');
    const dataPwd = formData.get('passwordName');
    console.log(`* I * (dataEmail, dataPwd) is (${dataEmail}, ${dataPwd})`);
    evt.currentTarget.reset(); // Cleans up the form as necessary with preventDefault in place
}

            <form onSubmit={signupFormSubmit} method="GET">
*/

/* Modern React way - use action, no method, no need to block page reload, form clean up automatic
function signupFormSubmit(formData) {
    const dataEmail = formData.get('emailName');
    const dataPwd = formData.get('passwordName');
    console.log(`* I * (dataEmail, dataPwd) is (${dataEmail}, ${dataPwd})`)
}

            <form action={signupFormSubmit}>
*/

/* Drop down box simple
                    <select id='dropDownId' name='dropDownName' defaultValue="Yellow">
                    <option value="red">Red</option>
*/

/* Drop down box with exclusion
                    <select id='dropDownId' name='dropDownName' defaultValue="" required>
                    <option disabled value="">-- Choose an option --</option>
                    <option value="red">Red</option>
*/
