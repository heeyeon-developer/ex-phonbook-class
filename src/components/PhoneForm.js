import React, { Component } from 'react'

class PhoneForm extends Component {

    state = {
        name: '',
        phone: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();//다시 렌더링 하는것 방지 - 다시 렌더링 해버리면 상태를 다 잃어버림
        this.props.onCreate(this.state)
        this.setState({
            name: '',
            phone: ''
        })
    }

    render(){
         const style = {
            padding: '8px',
            margin: '0 auto',
            width: '22vw',
        }
        return (
            <form onSubmit={this.handleSubmit} style = {style}>
                <input 
                value={this.state.name}
                onChange={this.handelChange}
                name='name'
                ></input>
                <input 
                value={this.state.phone}
                onChange={this.handelChange}
                name='phone'
                ></input>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default PhoneForm
