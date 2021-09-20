import React, { Component } from 'react'

export default class App extends Component {
  state = {
    clients : [
      {id : 1, nom : "Amin Kammoun"},
      {id : 2, nom : "Ahmed Mechim"},
      {id : 3, nom : "Khaled Boudaya"},
      {id : 4, nom: "Heni Dammak" }
    ],
    nouveauClient : '',
    isShow :true
  };


  handleSubmit = (event) => {
    event.preventDefault();
    
    const id = new Date ().getTime();
    const nom = this.state.nouveauClient;
    const client = {id : id, nom:nom}
    const clients = this.state.clients.slice();
    clients.push(client);
    this.setState({clients : clients});
  }
  
  delete = amin => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === amin);
    clients.splice(index, 1) ;
    this.setState({clients: clients})
    
  }
  change = (event) =>{ 
    const value =event.currentTarget.value;
    this.setState({nouveauClient : value})
  }
  show = () => {this.setState({isShow: !this.state.isShow})}


  render() {
    return (
      <div className="box">
        <button className="hide" onClick={()=> this.show()}>{this.state.isShow? "Hide" : "show"}</button>
        <div className="part">
        {
          this.state.isShow &&  <div className="show">
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Ajouter un Nom" value= {this.state.nouveauClient} onChange={this.change}/>
            <button>Confirmer</button>
            </form>
              <ul>
              {this.state.clients.map(client => (
                <li>
                  {client.nom}
                  <button onClick={()=> this.delete(client.id)}>Delete</button>
                </li>
              ))}
            </ul>
            
          </div>
            
        }
        </div>
        
        
        
      
      </div>
    )
  }
}
