const React = require('react')
const DefaultLayout = require('./layouts/default')
const { appURL } = require('../config/config')

function HomePage({ result: shortUrl }) {
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
             <div className="container">
                 <div className="row">
                     <div className="col-sm">
                         <h1>Short URL</h1>
                     </div>
                 </div>

               <div className="row">
                <div className="col">
                    <form method="POST"
                          action={appURL + "/api/url"}
                          encType="application/x-www-form-urlencoded">
                        <div className="form-group">
                        <div className="mb-3">
                        <div className="mb-2">
                             <label htmlFor="urlInput">Write here your long URL</label>
                        </div>
                             <input
                                 type="url"
                                 name="url"
                                 className="form-control"
                                 id="urlInput"
                                 aria-describedby="urlHelper"/>
                        </div>
                        </div>
                             <button type="submit" className="btn btn-primary">
                                 Submit
                             </button>
                    </form>
                 </div>
                   <div className="row">
                       <div className="col">
                           {shortUrl && <a href={shortUrl} className="btn btn-outline-dark" target="_blink">{shortUrl}</a>}
                       </div>
                   </div>
               </div>
             </div>
    </DefaultLayout>
}

module.exports = HomePage