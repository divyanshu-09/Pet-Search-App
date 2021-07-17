
import React from 'react';

class Search extends React.Component {

    state = {
        animals:[],
        animal_name : "dog",
    };

    componentDidMount() {

        fetch('/animals').then(function (res) {

            return res.json();
        }).then((json) => {
            
            this.setState({animals:json});
        });
    }

    render() {

        let all_animals = this.state.animals.map((el) => {
        
            return el.animal;
        });
    
        let unique_animal = [];
    
        for(let i=0;i<all_animals.length;i++) {
    
            let a = all_animals[i];
    
            if(!unique_animal.includes(a))
                unique_animal.push(a);
        }


        let all_breed = this.state.animals.filter((el) => {

            return el.name == this.state.animal_name;
        })
    
        // let breed = all_breed.map( (el) => {

        //     return el.breed;
        // })

        let unique_breed = [];
    
        for(let i=0;i<all_breed.length;i++) {
    
            let b = all_breed[i];
    
            if(!unique_breed.includes(b))
                unique_breed.push(b);
        }
        

        return (

            <React.Fragment>

                <label for="basic-url" class="form-label">City Name</label>
                <div class="input-group mb-2">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                </div>

                <label for="animal">Animal</label>
                <div class="input-group mt-2 mb-2">
                    <select class="form-select" id="inputGroupSelect02" onChange={(event) => {
                        this.setState({animal_name : event.target.value});
                    }}>
                        {
                            unique_animal.map((el) => {

                                return(<option>{el}</option>);
                            })
                        }
                    </select>
                </div>

                <label for="animal">Breed</label>
                <div class="input-group mt-2 mb-2">
                    <select class="form-select" id="inputGroupSelect02">
                    <option>
                        Choose...
                    </option>
                        {
                            unique_breed.map((el) => {

                                return(<option>{el}</option>);
                            })
                        }
                    </select>
                </div>

                <button type="button" class="btn btn-primary mt-3">Search ...</button>
            </React.Fragment>
                );
    }
}

                export default Search;