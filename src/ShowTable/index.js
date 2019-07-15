import React from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ShowTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
        this.renderTableData = this.renderTableData.bind(this);
        this.renderTableHeader = this.renderTableHeader.bind(this);
    }

    componentDidMount(){
        // const series = ["Vikings", "Game of Thrones"];
    
        // setTimeout(() => {
        //   this.setState({ series: series });
        // }, 2000);
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => this.setState({ posts: json }))
    
        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        //   .then(response => response.json())
        //   .then(json => console.log(json));
    }

    renderTableData(){
        return this.state.posts.map( (post, index) => {
                const { userId, id, title, body } = post
                return (
                    <tr key = {id}>
                        <td>{userId}</td>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{body}</td>
                    </tr>
                );
            })
    }

    renderTableHeader(){
        let header = ["User Id", "Id", "Title", "Body"];
        return header.map((key, index) => {
            return (
                  <th key = {index}>{key.toUpperCase()}</th>  
            );
        })
    }

    render(){
        // const columns = [
        //     {
        //       Header: "User Id",
        //       accessor: "userId"
        //     },
        //     {
        //       Header: "Id",
        //       accessor: "id"
        //     },
        //     {
        //       Header: "Title",
        //       accessor: "title"
        //     },
        //     {
        //       Header: "Body",
        //       accessor: "body"
        //     }
        // ]
        return(
            <table id = 'posts'>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        );
    }
}

export default ShowTable;