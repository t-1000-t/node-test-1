const React = require('react')
const DefaultLayout = require('./layouts/default')

function HomePage() {
    return <DefaultLayout>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div className="container-fluid" bis_skin_checked="1">
                <a className="navbar-brand" href="#">Expand at lg</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample05" bis_skin_checked="1">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown"
                               aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form>
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </div>
        </nav>
        <h1>Hello!!!</h1>

        <div className="container">
            <div className="row">
                <div className="col">
        <form>
                        <div className="mb-3">
                             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                             <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                         <div className="mb-3 form-check">
                             <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                         </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </DefaultLayout>
}

module.exports = HomePage