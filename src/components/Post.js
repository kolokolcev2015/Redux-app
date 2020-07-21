import React, {Component} from "react";
import {connect} from "react-redux";
import {createPost, deletePost} from "../redux/actions";

class Post extends Component{
    constructor(props) {
        super(props);
        this.Delete = this.Delete.bind(this)
    }
    Delete = id => {
        this.props.deletePost(id)
        console.log(id)
    }
    render() {
        return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.post.title}</h5>
                <button onClick={() => this.Delete(this.props.post.id)}>Удалить</button>
            </div>
        </div>
    )}
}

const mapDispathDel={
    deletePost
}

export default connect(null,mapDispathDel)(Post)