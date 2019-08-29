import React from 'react';
import Dropdown from "../dropdownmenu/CategoryDropdown";

class Blog extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }

    }

    render() {
        return(
            <div className="container" style={{marginTop:'20px'}}>
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
                <div className="row"  style={{marginTop:'20px'}}>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <center><h2>Hello World</h2></center> <br/>
                                <p>
                                    Step 3: spot bottlenecks and problems ahead of time
                                    Who’s carrying the weight
                                    How much work will be pushed back if a team member calls in sick? What if someone gets pulled in to help on a side project? You need to know which team members have a larger workload, so you can demonstrate who is critical to your release and why, and maintain a back-up plan.

                                    A visual indication of workload per person is critical to keeping a handle on team progress.

                                    For the first Issue Statistics gadget, pick the same project as above, and select to compare stats by Assignee.
                                    Set ‘Show Resolved Issue Statistics’ to No, because resolved issues aren’t going to affect future progress.
                                    Which project areas require more effort
                                    Naturally, some aspects of your project are more important than others. It’s up to you to keep your team working on the right parts: if the rest of the company is focused around onboarding first-time users, but your current work is weighted toward increasing performance with large data sets, you’ve got a problem.
                                </p>
                                <p>
                                    Step 3: spot bottlenecks and problems ahead of time
                                    Who’s carrying the weight
                                    How much work will be pushed back if a team member calls in sick? What if someone gets pulled in to help on a side project? You need to know which team members have a larger workload, so you can demonstrate who is critical to your release and why, and maintain a back-up plan.

                                    A visual indication of workload per person is critical to keeping a handle on team progress.

                                    For the first Issue Statistics gadget, pick the same project as above, and select to compare stats by Assignee.
                                    Set ‘Show Resolved Issue Statistics’ to No, because resolved issues aren’t going to affect future progress.
                                    Which project areas require more effort
                                    Naturally, some aspects of your project are more important than others. It’s up to you to keep your team working on the right parts: if the rest of the company is focused around onboarding first-time users, but your current work is weighted toward increasing performance with large data sets, you’ve got a problem.
                                </p>
                                <p>
                                    Step 3: spot bottlenecks and problems ahead of time
                                    Who’s carrying the weight
                                    How much work will be pushed back if a team member calls in sick? What if someone gets pulled in to help on a side project? You need to know which team members have a larger workload, so you can demonstrate who is critical to your release and why, and maintain a back-up plan.

                                    A visual indication of workload per person is critical to keeping a handle on team progress.

                                    For the first Issue Statistics gadget, pick the same project as above, and select to compare stats by Assignee.
                                    Set ‘Show Resolved Issue Statistics’ to No, because resolved issues aren’t going to affect future progress.
                                    Which project areas require more effort
                                    Naturally, some aspects of your project are more important than others. It’s up to you to keep your team working on the right parts: if the rest of the company is focused around onboarding first-time users, but your current work is weighted toward increasing performance with large data sets, you’ve got a problem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
