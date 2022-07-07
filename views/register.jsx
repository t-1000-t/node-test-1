const React = require("react")
const DefaultLayout = require("./layouts/default")
const { appUrl } = require("../config/config")

function Register() {

    return (
        <DefaultLayout>
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-12 col-sm-6">
                    <form className="form-signIn"
                          method="POST"
                          action={appUrl + "/api/auth/register"}
                          encType="application/x-www-form-urlencoded">
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <div className="form-floating">
                        <input type="email"
                               name="email"
                               className="form-control"
                               id="floatingInput"
                               placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"
                               name="password"
                               className="form-control"
                               id="floatingPassword"
                               placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox"
                                   value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">© {new Date().getFullYear()}</p>
                    </form>
                    </div>
                    </div>
                    </div>
        </DefaultLayout>
    )
}

module.exports = Register