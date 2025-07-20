import React from 'react';

class User extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         age: 22,
         isMarried: false,
         count: 0,
      };
   }

   render() {
      const { name, location } = this.props;
      const { age, isMarried, count } = this.state;

      return (
         <>
            <div>
               <h1>Name: {name}</h1>
               <h4>Location: {location}</h4>
               <h4>Age: {age}</h4>
               <h4>Marital Status: {isMarried ? 'Married' : 'Unmarried'}</h4>
            </div>
            <div>
               <h1>Count = {count}</h1>
               <button
                  onClick={() => {
                     this.setState({
                        count: this.state.count + 1,
                     });
                  }}
               >
                  +
               </button>
            </div>
         </>
      );
   }
}

export default User;
