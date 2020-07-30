import React, { Component } from "react";

class ClassList extends Component {
    state = {
        buttons: []
    };

    componentDidMount() {
        var user = this.props.user;
        if (user === "teacher") {
            this.setState({})
        } else {
            this.setState({})
        }
    }

    render() {
        return (
            <div class="container main mt-5 text-black text-center">
                <h2 class="mb-2">Class List for <span id="class-name">Miss P's 1st Grade</span></h2>
                <table style="width: 100%;">
                    <tr>
                        <th>Student Name</th>
                        <th>Grade</th>
                        <th>Missing Assignments</th>
                        <th><span id="class-size">6</span> Students <i class="fa fa-user"></i></th>
                    </tr>
                    <tr>
                        <td>Abby Nielson</td>
                        <td>B</td>
                        <td>2</td>
                        <td><i class="fa fa-comments" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>Jordan Call</td>
                        <td>A</td>
                        <td>1</td>
                        <td><i class="fa fa-comments" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>Lisa Swindler</td>
                        <td>A</td>
                        <td>0</td>
                        <td><i class="fa fa-comments" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>Cass Wolff</td>
                        <td>A+</td>
                        <td>0</td>
                        <td><i class="fa fa-comments" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>Attila</td>
                        <td>F</td>
                        <td>10</td>
                        <td><i class="fa fa-comments" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <td>Khan</td>
                        <td>C</td>
                        <td>6</td>
                        <td><i class="fa fa-comments" aria-hidden="true"></i></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ClassList;
