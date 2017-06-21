import React from 'react';
import { addCar, getCarById, editCar } from '../../api';
import { Link } from 'react-router-dom';

export class AddPage extends React.Component {
    constructor (props) {
        super(props);
        this.id = this.props.match.params.carId;
        if (this.id) {
            const car = getCarById(this.id);
            this.state = {
                brand: car.brand,
                model: car.model,
                year: car.year,
                transmission: car.transmission,
                capacity: car.capacity,
                about: car.about,
                price: car.price,
                photo: car.photo,
                gasoline: car.gasoline
            };
        } else {
            this.state = {
                brand: '',
                model: '',
                year: '',
                transmission: '',
                capacity: '',
                about: '',
                price: '',
                photo: '',
                gasoline: ''
            };
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    readFile(e) {
        const photo = document.getElementById('img');
        if (e.target.files && e.target.files[0]) {
            const FR = new FileReader();
            FR.onload = function (e) {
                photo.setAttribute('src', e.target.result);
            };
            FR.readAsDataURL(e.target.files[0]);
            this.setState({photo: photo.getAttribute('src')});
        }
    }

    handleChangeRadio (e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit () {
        if (this.id) {
            editCar(this.state, this.id);
            alert("Объявление изменено успешно!");
        }
        else {
            addCar(this.state);
            alert("Объявление добавлено успешно!");
        }
    }

    render () {
        return (
            <div id="addCar">
                <div id="newCarInfo">
                    <div>
                        Марка:
                        <input
                            name="brand"
                            type="text"
                            value={this.state.brand}
                            onChange={(e) => this.setState({brand: e.target.value})}
                        />
                    </div>
                    <div>
                        Модель:
                        <input
                            name="model"
                            type="text"
                            value={this.state.model}
                            onChange={(e) => this.setState({model: e.target.value})}
                        />
                    </div>
                    <div>
                        Цена: <br />
                        <input
                            name="price"
                            type="number"
                            value={this.state.price}
                            onChange={(e) => this.setState({price: e.target.value})}
                        />
                    </div>
                    <div>
                        Год: <br />
                        <input
                            name="year"
                            type="number"
                            value={this.state.year}
                            onChange={(e) => this.setState({year: e.target.value})}
                        />
                    </div>
                    <div>
                        Объем двигателя: <br />
                        <input
                            name="capacity"
                            type="number"
                            value={this.state.capacity}
                            onChange={(e) => this.setState({capacity: e.target.value})}
                        />
                    </div>
                </div>
                    <div>
                        Тип КПП: <br />
                        <label>
                            <input type="radio" value="Автомат"
                                   name="transmission"
                                   checked={this.state.transmission === 'Автомат'}
                                   onChange={(e) => this.handleChangeRadio(e)}
                                    />
                            Автомат
                        </label>
                        <label>
                            <input type="radio" value="Механика"
                                name="transmission"
                                   checked={this.state.transmission === 'Механика'}
                                onChange={(e) => this.handleChangeRadio(e)}
                                    />
                            Механика
                        </label>
                    </div>
                    <div>
                        Тип топлива: <br />
                        <label>
                            <input type="radio" value="Дизель"
                                   name="gasoline"
                                   checked={this.state.gasoline === 'Дизель'}
                                   onChange={(e) => this.handleChangeRadio(e)}
                                    />
                            Дизель
                        </label>
                        <label>
                            <input type="radio" value="Бензин"
                                   name="gasoline"
                                   checked={this.state.gasoline === 'Бензин'}
                                   onChange={(e) => this.handleChangeRadio(e)}
                                    />
                            Бензин
                        </label>
                    </div>
                    <div>
                        <input id="photo" type="file" onChange={(e) => this.readFile(e)}/>
                        <img id="img" height="150" src={this.state.photo} />
                    </div>
                    <Link to='/admin'>
                        <button type="submit" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </Link>
            </div>
        );
    }
}
