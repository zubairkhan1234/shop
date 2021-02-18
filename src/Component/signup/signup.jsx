import react from "react";

function Signup() {

    return (
        <>
            <div>
                <h1>Signup From</h1>
                <form>
                    <label>Name :</label><br />
                    <input type="text" placeholder="Enter your username" id="username" /><br />
                    <label>Email :</label><br />
                    <input type="email" placeholder="Enter your Email" id="email" /><br />
                    <label>Phone Number</label><br />
                    <input type="number" placeholder="Enter your phone number" id="number" /><br />
                    <label>Password</label><br />
                    <input type="text" placeholder="Enter your password" id="password" /><br />
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select><br />
                    <button type="submit">SignUp</button>

                </form>

            </div>

        </>
    )


}

export default Signup ;