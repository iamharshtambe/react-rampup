import React from 'react';

class User extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         userData: null,
      };
   }

   async componentDidMount() {
      const data = await fetch('https://api.github.com/users/iamharshtambe');
      const json = await data.json();

      this.setState({
         userData: json,
      });
   }

   render() {
      if (!this.state.userData) {
         return <p>Loading...</p>;
      }

      const { name, twitter_username } = this.state.userData;

      return (
         <div>
            <h1>Name: {name}</h1>
            <h4>X: {twitter_username}</h4>
         </div>
      );
   }
}

export default User;
