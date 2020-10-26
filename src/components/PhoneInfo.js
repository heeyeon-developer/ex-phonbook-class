import React, {Component} from 'react'

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }
    render(){
        const style = {
            border: '1px solid green',
            padding: '8px',
            margin: '8px',
            width: '20vw'
        }
        const wrap = {
            width: '20vw',
            margin: '0 auto'
        }
        const {
            name,phone,id
        } = this.props.info

        return (
            <div style={wrap}>
                <div style = {style}>
                    <div><b>{name}</b></div>
                    <div>{phone}</div>
                </div>
            </div>
        )
    }
}

export default PhoneInfo
