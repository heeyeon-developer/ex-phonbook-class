import React, {Component} from 'react'
import './App.css';
import PhoneForm from './components/PhoneForm'
import PhoneInfo from './components/PhoneInfo';
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {
  //App에서 상태 데이터를 관리
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'ingyu',
        phone: '000-0000-0000'
      },
      {
        id: 1,
        name: 'heeyeon',
        phone: '000-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        id: this.id++,
        ...data
      })
    })
  }
  render(){
    return (
      <div className='center'>
      <PhoneForm 
        onCreate={this.handleCreate}
      />
      <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
