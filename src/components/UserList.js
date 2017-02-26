import React, { Component } from 'react'
import User from '../components/User'

class UserList extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.users.map(empleado => {
            return (
              <User
                key={empleado.id}
                nombre={empleado.name}
                email={empleado.email}
              />
            );
          })}
        </ul>
        <form onSubmit={this.props.onAddUser}>
          <input type="text" placeholder="Nombre" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="submit" value="Guardar" />
        </form>
      </div>
    );
  }
}

export default UserList;