import React, { Component } from 'react';


class datatable extends Component {
    render() { 
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.jobrole}
                </td>
                <td>
                    {this.props.obj.function}
                </td>
                <td>
                    {this.props.obj.subfunction}
                </td>
                <td>
                    {this.props.obj.company}
                </td>
                <td>
                    {this.props.obj.skills}
                </td>
                <td>
                    {this.props.obj.softskills}
                </td>
                <td>
                    {this.props.obj.location}
                </td>
                <td>
                    {this.props.obj.salaryrange}
                </td>
                <td>
                    {this.props.obj.jobdescription}
                </td>

            </tr>
        );
    }
}

export default datatable;