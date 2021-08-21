import React, {useState, useEffect} from "react";

function Add_Lesson() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-muted" href="#">AFGlobal-2021</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link text-light" href="/course">Courses </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-light" href="/view-all-ws">Lessons </a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Add_Lesson;