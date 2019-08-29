import React from 'react';
import Dropdown from '../component/dropdownmenu/CategoryDropdown';

function Index() {
    return (
       <div style={{marginTop:'10px'}}>
           <div className="row" style={{marginLeft:'20px', marginRight:'20px'}}>
               <div className="col-md-12">
                   <nav className="navbar navbar-expand-lg navbar-light bg-light">
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav mr-auto">
                               <li className="nav-item active">
                                   <Dropdown/>
                               </li>
                               <li className="nav-item">
                                   <a className="nav-link" href="/new-posting"><b>New Posting</b></a>
                               </li>
                               <li className="nav-item">
                                   <a className="nav-link" href="/my-posting"><b>My Posting</b></a>
                               </li>
                           </ul>
                           <form className="form-inline my-2 my-lg-0">
                               <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                      aria-label="Search"/>
                               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                           </form>
                       </div>
                   </nav>
               </div>
           </div>
           <div className="row" style={{marginLeft:'20px', marginRight:'20px', marginTop:'30px'}}>
                <div className="col-md-4">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                            attention to featured content or information.</p>
                        <hr className="my-3"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger
                            container.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Read more</a>
                        </p>

                    </div>
                </div>
               <div className="col-md-4">
                   <div className="jumbotron" >
                       <h1 className="display-4">Hello, world!</h1>
                       <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                           attention to featured content or information.</p>
                       <hr className="my-3"/>
                       <p>It uses utility classes for typography and spacing to space content out within the larger
                           container.</p>
                       <p className="lead">
                           <a className="btn btn-primary btn-lg" href="#" role="button">Read more</a>
                       </p>

                   </div>
               </div>
               <div className="col-md-4">
                   <div className="jumbotron">
                       <h1 className="display-4">Hello, world!</h1>
                       <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                           attention to featured content or information.</p>
                       <hr className="my-3"/>
                       <p>It uses utility classes for typography and spacing to space content out within the larger
                           container.</p>
                       <p className="lead">
                           <a className="btn btn-primary btn-lg" href="#" role="button">Read more</a>
                       </p>

                   </div>
               </div>
           </div>
           <div className="row" style={{marginLeft:'20px', marginRight:'20px'}}>
               <div className="col-md-4">
                   <div className="jumbotron">
                       <h1 className="display-4">Hello, world!</h1>
                       <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                           attention to featured content or information.</p>
                       <hr className="my-3"/>
                       <p>It uses utility classes for typography and spacing to space content out within the larger
                           container.</p>
                       <p className="lead">
                           <a className="btn btn-primary btn-lg" href="#" role="button">Read more</a>
                       </p>

                   </div>
               </div>
               <div className="col-md-4">
                   <div className="jumbotron" >
                       <h1 className="display-4">Hello, world!</h1>
                       <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                           attention to featured content or information.</p>
                       <hr className="my-3"/>
                       <p>It uses utility classes for typography and spacing to space content out within the larger
                           container.</p>
                       <p className="lead">
                           <a className="btn btn-primary btn-lg" href="#" role="button">Read more</a>
                       </p>

                   </div>
               </div>
               <div className="col-md-4">
                   <div className="jumbotron">
                       <h1 className="display-4">Hello, world!</h1>
                       <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                           attention to featured content or information.</p>
                       <hr className="my-3"/>
                       <p>It uses utility classes for typography and spacing to space content out within the larger
                           container.</p>
                       <p className="lead">
                           <a className="btn btn-primary btn-lg" href="#" role="button">Read more</a>
                       </p>

                   </div>
               </div>
           </div>
       </div>
    )
}

export default Index;
