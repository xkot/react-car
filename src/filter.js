import React from 'react';

export class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id="filter">
                <label>
                    Марка:
                    <input
                        name="brand"
                        type="text"
                        // value={}
                        onChange={this.handleInputChange} />
                </label>
                <br /><br />
                <label>
                    Модель:
                    <input
                        name="model"
                        type="text"
                        // value={}
                        onChange={this.handleInputChange} />
                </label>
                <br /><br />
                <label>
                    Цена: <br />от
                    <input
                        name="minPrice"
                        type="number"
                        // value={}
                        onChange={this.handleInputChange} />
                     до
                    <input
                        name="maxPrice"
                        type="number"
                        // value={}
                        onChange={this.handleInputChange} />
                </label>
                <br /><br />
                <label>
                    Год: <br />от
                    <input
                        name="minYear"
                        type="number"
                        // value={}
                        onChange={this.handleInputChange} />
                     до
                    <input
                        name="maxYear"
                        type="number"
                        // value={}
                        onChange={this.handleInputChange} />
                </label>
                <br /><br />
                <label>
                    АКПП:
                    <input
                        name="transmission"
                        type="checkbox"
                        // checked={}
                        onChange={this.handleInputChange} />
                </label>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}