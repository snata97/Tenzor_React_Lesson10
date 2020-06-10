import React from 'react';
import {Person} from './Person';

class Dataset extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            host: props.host,
            object: props.object,
            method: props.method,
            results: []
        }
    }

    query(query, options){
        let url = new URL(this.state.host);
        url.pathname += this.state.object;
        url.pathname += query;
        console.log("url:"+url);
        console.log("options:"+options);
        return fetch(url, options).then(
            response => response.json()
        );
    }

    readAll(){
        this.query(
            ``,
            {
                method: "GET"
            }
        ).then(result => (this.setState({ results: [...result] })));
    }

    render(){
        let data;
        if(this.state.method === "readAll"){
            this.readAll();
            data = this.state.results.map((elem, index) => 
                (<Person item={elem} key={index} type={this.state.object} />)
            );
        }
        return (
            <div className="block_persons_item">
                {data}
            </div >
        )
    }

}

export {Dataset};