import React from "react";

const Navbar = ({ search }) => {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >

            <div class="container-fluid">

                <ul class="navbar-nav w-100  d-flex justify-content-between">
                    <li class="nav-item">
                        <form className="form-control bg-dark border-0" onSubmit={(event) => search(event)}>
                            <label>
                                <input type="text" name="search" id="search" placeholder="Enter search" className="p-2" />
                            </label>
                            <input type="submit" value="search" className="btn btn-success ms-3" />
                        </form>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link self-align-end" href="./logout">Logout</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar